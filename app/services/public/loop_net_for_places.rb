require "watir-webdriver"
require "csv"

module Public
  class LoopNetForPlaces
    attr_accessor :browser, :csv, :addresses, :header

    def initialize(addresses, uuid)
      @browser = Watir::Browser.new :phantomjs
      @browser.window.maximize
      @header = [
        "Address Input", "Address Search", "Type", "Lender Name", "Lender Address", "Loan Amount", "Mortgage Date", "Mortgage Detail", "Sale Price", "Building Size"
      ]

      @csv = CSV.open("public/output_loop_find_lender_#{uuid}.csv", "ab")
      @csv << header
      @addresses = addresses
    end

    def call
      login
    
      @addresses.each do |address|
        ap "-----------------------------------start-----------------------------------"
        if address
          begin
            search(address)
            get_properties(address)
          rescue Exception => e
            ap e.backtrace
          end
        end
      end

      close_browser
      csv.close
    end

    def login
      browser.goto "http://www.loopnet.com/xNet/MainSite/User/customlogin.aspx?LinkCode=31824"
      browser.text_field(id: "ctlLogin_LogonEmail").set "dane.chodos@blacklinelending.com"
      browser.text_field(id: "ctlLogin_LogonPassword").set "Pickman45"
      browser.link(id: "ctlLogin_btnLogon").click
    end

    def search(address)
      ap address

      browser.goto "http://www.loopnet.com/propertyrecords/"
      browser.text_field(id: "Location").set address
      browser.link(id: "location_search_btn").click
    end

    def get_properties(address)
      sleep(6)

      row = CSV::Row.new(header,[])
      row["Address Input"] = address

      if browser.link(class: "searchResultPhoto").exists?
        browser.link(class: "searchResultPhoto").click
        sleep(1)

        row["Address Search"] = browser.div(class: "listingProfileDetail").h1.text
        if browser.div(id: "SummaryTabControl_propertyTab").exists?
          browser.div(id: "SummaryTabControl_propertyTab").table.tbody.trs.each do |tr|
            if tr.th.text == "Primary Property Type:"
              row["Type"] = tr.td.text
            end
            if tr.th.text == "Building Size:"
              row["Building Size"] = tr.td.text
            end
          end
        end

        if browser.link(id: "lnkMenuOwnerMortgage").exists?
          browser.link(id: "lnkMenuOwnerMortgage").click

          if browser.table(class: "keyValue").exists?
            table = browser.table(class: "keyValue")

            table.tbody.trs.each do |tr|
              case tr.th.text
              when "Mortgage Details (at time of loan)"
                row["Mortgage Detail"] = tr.td.text
              when "Sale Price"
                row[tr.th.text] = tr.td.text
              when "Mortgage Date"
                row[tr.th.text] = tr.td.text
              when "Mortgage Amount"
                row["Loan Amount"] = tr.td.text
              when "Lender Name"
                row[tr.th.text] = tr.td.text
              when "Lender Address"
                row[tr.th.text] = tr.td.text
              else
              end
            end
          end
        end
      else
        ap "No Data Available"
      end

      csv << row
    end

    def close_browser
      browser.goto "http://www.loopnet.com/xNet/MainSite/User/logoff.aspx?LinkCode=850"
      browser.quit
    end
  end
end


