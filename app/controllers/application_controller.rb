class ApplicationController < ActionController::Base
  layout "client"
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :set_user_by_token
  protect_from_forgery unless: -> { request.format.json? }

  def execute
    begin
      render_response(create_service.execute)
    rescue BaseError => error
      render_response(error)
    end
  end

  private
  def find_version
    request.headers
      .fetch(:accept)
      .split('version=')
      .last
      .upcase
  end

  def create_service
    find_service.new(params, request.headers, cookies, session, @resource)
  end

  def resource_class(mapping = nil)
    User
  end

  def find_service
    "#{find_module}::#{find_version}::#{find_action}".constantize
  end

  def find_module
    controller_name.camelize
  end

  def find_action
    action_name.camelize
  end

  def render_response(data)
    respond_to do |format|
      format.json { render_json data }
    end
  end

  def render_json(data)
    if data.kind_of?(BaseError)
      render json: data.to_json, status: data.status
    else
      if (headers = data.try(:headers))
        response.headers.merge!(headers)
        render json: data.user.to_json
      else
        render json: data.to_json
      end
    end
  end
end
