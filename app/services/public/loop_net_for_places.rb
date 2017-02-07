require "watir-webdriver"

module Public
  class LoopNetForPlaces
    attr_accessor :browser, :addresses, :output

    def initialize(addresses, uuid)
      @browser = Watir::Browser.new :phantomjs
      @browser.window.maximize
      @addresses = addresses
      @output = []
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

      @output.sort_by{ |item| item[:lender_name] }.reverse!
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
      data = {}
      data[:address_input] = address

      if browser.link(class: "searchResultPhoto").exists?
        browser.link(class: "searchResultPhoto").click
        sleep(1)

        data[:address_search] = browser.div(class: "listingProfileDetail").h1.text
        if browser.div(id: "SummaryTabControl_propertyTab").exists?
          browser.div(id: "SummaryTabControl_propertyTab").table.tbody.trs.each do |tr|
            if tr.th.text == "Primary Property Type:"
              data[:type] = tr.td.text
            end
            if tr.th.text == "Building Size:"
              data[:building_size] = tr.td.text
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
                data[:mortgage_detail] = tr.td.text
              when "Sale Price"
                data[:sale_price] = tr.td.text
              when "Mortgage Date"
                data[:mortgage_date] = tr.td.text
              when "Mortgage Amount"
                data[:mortgage_amount] = tr.td.text
              when "Lender Name"
                data[:lender_name] = tr.td.text
              when "Lender Address"
                data[:lender_address] = tr.td.text
              else
              end
            end

            if data[:lender_name]
              lender_info = Public::PlacesApi.new(data[:lender_name], address).near_location

              if lender_info && lender_info[:address]
                data[:lender_address] = lender_info[:address]
                data[:lender_phone] = lender_info[:phone]
              end
            end
          end
        end
      else
        ap "No Data Available"
      end

      data[:lender_name] = "" unless data[:lender_name]
      @output << data
    end

    def close_browser
      browser.goto "http://www.loopnet.com/xNet/MainSite/User/logoff.aspx?LinkCode=850"
      browser.quit
    end
  end
end


