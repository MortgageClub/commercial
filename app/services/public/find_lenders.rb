module Public
  class FindLenders
    attr_reader :agent, :key, :address, :place_ids, :lenders, :browser

    def initialize(address)
      @agent = Mechanize.new
      @agent.agent.http.verify_mode = OpenSSL::SSL::VERIFY_NONE
      @address = address
      # @key = "AIzaSyDZ0GAVFZv5izmhnHjJHJoqkZITlpx2dbQ"
      @key = "AIzaSyAju7nwoPgiasGdApz2XZMcgw0PDGvaRCM"
      @browser = Watir::Browser.new :phantomjs
      @browser.window.maximize
      @lenders = []
    end

    def call
      location = query_location
      places = []

      if location
        response_bank = agent.get "https://maps.googleapis.com/maps/api/place/textsearch/json?query=#{URI.escape('bank')}&location=#{location["lat"]},#{location["lng"]}&radius=50000&key=#{key}"
        response_bank = JSON.load(response_bank.body)

        if response_bank["status"] == "OK"
          places += response_bank["results"]
        end

        response_credit_union = agent.get "https://maps.googleapis.com/maps/api/place/textsearch/json?query=#{URI.escape('credit union')}&location=#{location["lat"]},#{location["lng"]}&radius=50000&key=#{key}"
        response_credit_union = JSON.load(response_credit_union.body)
        
        if response_credit_union["status"] == "OK"
          places += response_credit_union["results"]
        end
      end

      @place_ids = places.map { |place| place["place_id"] }.uniq 
      place_details

      @lenders.sort_by{ |item| item[:name] }.reverse!
    end

    def query_location
      response = agent.get "https://maps.googleapis.com/maps/api/place/textsearch/json?query=#{URI.escape(address)}&key=#{key}"
      response = JSON.load(response.body)

      if response["status"] == "OK"
        if response["results"].first
          response["results"].first["geometry"]["location"]
        end
      end
    end

    def place_details
      place_ids.each do |place_id|
        response = agent.get "https://maps.googleapis.com/maps/api/place/details/json?key=#{key}&placeid=#{place_id}"
        response = JSON.load(response.body)

        if response["status"] == "OK"
          if data = response["result"]
            next unless data["website"]

            domain = URI(data["website"]).host
            lender = lenders.select { |lender| lender[:website].index(domain) }

            if lender.present? || data["name"].downcase.index("atm").present?
              # lender["address"] << data["formatted_address"]
            else
              @lenders << {
                name: data["name"],
                address: data["formatted_address"],
                website: domain,
                phone: data["international_phone_number"],
                is_cre: is_cre(domain)
              }
            end
          end
        end
      end
    end

    def is_cre(site)
      browser.goto "https://www.google.com/webhp?sourceid=chrome-instant&rlz=1C5CHFA_enVN700VN700&ion=1&espv=2&ie=UTF-8#q=site:#{site}+%22commercial+real+estate%22"
      browser.body.text.include?("No results found") ? "No" : "Yes"
    end
  end
end

