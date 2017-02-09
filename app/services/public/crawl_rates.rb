module Public
  class CrawlRates
    attr_accessor :agent

    def initialize
      @agent = Mechanize.new
    end

    def call
      response = @agent.get("http://snaprates.com/index.php")
      parser = response.parser

      if parser.css("#family1").present?
        parser.css("#family1 tbody tr").each do |tr|
          rate = Rate.find_or_initialize_by(table_name: "U.S. Treasuries", rate_type: tr.css("td")[0].text)
          rate.today = str_to_decimal(tr.css("td")[1].text)
          rate.yesterday = str_to_decimal(tr.css("td")[2].text)
          rate.one_week_ago = str_to_decimal(tr.css("td")[3].text)
          rate.one_month_ago = str_to_decimal(tr.css("td")[4].text)
          rate.save
        end
      end

      if parser.css("#family4").present?
        parser.css("#family4 tbody tr").each do |tr|
          rate = Rate.find_or_initialize_by(table_name: "Interest Rate Swaps", rate_type: tr.css("td")[0].text)
          rate.today = str_to_decimal(tr.css("td")[1].text)
          rate.yesterday = str_to_decimal(tr.css("td")[2].text)
          rate.one_week_ago = str_to_decimal(tr.css("td")[3].text)
          rate.one_month_ago = str_to_decimal(tr.css("td")[4].text)
          rate.save
        end
      end

      if parser.css("#family2").present?
        parser.css("#family2 tbody tr").each do |tr|
          rate = Rate.find_or_initialize_by(table_name: "Libor Index and Prime Rate", rate_type: tr.css("td")[0].text)
          rate.today = str_to_decimal(tr.css("td")[1].text)
          rate.yesterday = str_to_decimal(tr.css("td")[2].text)
          rate.one_week_ago = str_to_decimal(tr.css("td")[3].text)
          rate.one_month_ago = str_to_decimal(tr.css("td")[4].text)
          rate.save
        end
      end
    end

    private

    def str_to_decimal(str)
      str.gsub("%", "").to_f / 100
    end
  end
end