class FindLendersInPlaces < ApplicationJob
  require "pusher"
  queue_as :default

  def perform(address, uuid)
    output = Public::FindLenders.new(address).call

    Pusher.trigger('loop-net-channel', 'crawl-done', {
      uuid: uuid,
      message: "GooglePlaces",
      data: output
    })
  end
end
