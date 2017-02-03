class Advisors::GooglePlacesController < Advisors::BaseController
  def new
  end

  def create
    @results = Public::PlacesApi.new(google_places_params[:search], google_places_params[:address]).call
    
    render :new
  end

  private

  def google_places_params
    params.permit(
      :address,
      :search
    )
  end
end
