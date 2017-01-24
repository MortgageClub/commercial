class Advisors::LoopNetController < Advisors::BaseController
  def new
  end

  def create
    uuid = SecureRandom.uuid
    SearchAddressInLoopNet.perform_later(loop_net_params[:address].split("\r\n"), uuid)

    redirect_to action: :new, uuid: uuid
  end

  private

  def loop_net_params
    params.permit(
      :address
    )
  end
end
