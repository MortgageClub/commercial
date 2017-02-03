class SearchAddressInLoopNet < ApplicationJob
  require "pusher"
  queue_as :default

  def perform(addresses, uuid, type = "default")
    if type == "default"
      Public::LoopNet.new(addresses, uuid).call
    else
      Public::LoopNetForPlaces.new(addresses, uuid).call
    end 
    Pusher.trigger('loop-net-channel', 'crawl-done', {
      uuid: uuid,
      message: "Crawl Done"
    })
  end
end
