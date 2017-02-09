module Public
  class PlacesApi
    attr_reader :agent, :query, :key, :address

    def initialize(query, address)
      @agent = Mechanize.new
      @agent.agent.http.verify_mode = OpenSSL::SSL::VERIFY_NONE
      @query = query
      @address = address
      @key = ENV['GOOGLE_PLACES_API_KEY']
    end

    def call
      location = query_location
      
      if location
        response = agent.get "https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=#{URI.escape(query)}&location=#{location["lat"]},#{location["lng"]}&key=#{key}&rankby=prominence"
        # response = agent.get "https://maps.googleapis.com/maps/api/place/textsearch/json?query=#{URI.escape(query)}&location=#{location["lat"]},#{location["lng"]}&radius=50000&key=#{key}"
        response = JSON.load(response.body)

        if response["status"] == "OK"
          response["results"]
        else
          []
        end
      else
        []
      end
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

    def near_location
      location = query_location
      
      if location
        response = agent.get "https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=#{URI.escape(query)}&location=#{location["lat"]},#{location["lng"]}&key=#{key}&rankby=prominence"
        response = JSON.load(response.body)
        
        if response["status"] == "OK"
          # response["results"]
          place_details(response["results"].first["place_id"])
        else
          {}
        end
      else
        {}
      end
    end

    def place_details(place_id)
      response = agent.get "https://maps.googleapis.com/maps/api/place/details/json?key=#{key}&placeid=#{place_id}"
      response = JSON.load(response.body)

      if response["status"] == "OK"
        if data = response["result"]
          {
            address: data["formatted_address"],
            phone: data["international_phone_number"]
          }
        else
          {}
        end
      else
        {}
      end
    end
  end
end
