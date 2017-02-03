module Public
  class PlacesApi
    attr_reader :agent, :query, :key, :address

    def initialize(query, address)
      @agent = Mechanize.new
      @agent.agent.http.verify_mode = OpenSSL::SSL::VERIFY_NONE
      @query = query
      @address = address
      @key = "AIzaSyDZ0GAVFZv5izmhnHjJHJoqkZITlpx2dbQ"
    end

    def call
      location = query_location
      ap location
      if location
        response = agent.get "https://maps.googleapis.com/maps/api/place/textsearch/json?query=#{URI.escape(query)}&location=#{location["lat"]},#{location["lng"]}&radius=50000&key=#{key}"
        response = JSON.load(response.body)

        if response["status"] == "OK"
          ap response["results"]
          response["results"]
        end
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
  end
end
