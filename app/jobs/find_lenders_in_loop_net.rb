class FindLendersInLoopNet < ApplicationJob
  require "pusher"
  queue_as :default

  def perform(addresses, uuid)
    output = Public::LoopNetForPlaces.new(addresses, uuid).call
    
    Pusher.trigger('loop-net-channel', 'crawl-done', {
      uuid: uuid,
      message: "LoopNet",
      data: output
    })
  end
end
