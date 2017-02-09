class FindLendersInLoopNet < ApplicationJob
  require "pusher"
  queue_as :default

  def perform(address_input, addresses, uuid)
    output = Public::LoopNetForPlaces.new(address_input, addresses, uuid).call

    Pusher.trigger('loop-net-channel', 'crawl-done', {
      uuid: uuid,
      message: "LoopNet",
      data: output
    })
  end
end
