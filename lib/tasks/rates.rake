namespace :rates do
  desc "Crawl SnapRates"
  task crawl: :environment do
    Public::CrawlRates.new.call
  end
end
