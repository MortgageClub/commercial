class Service
  include Support::Authen
  include Support::Policy
  include Support::Validate

  attr_accessor :user, :params, :headers, :cookies, :session

  def initialize(params, headers, cookies, session, user = nil)
    @params = params
    @headers = headers
    @user = user
    @cookies = cookies
    @session = session
  end

  def execute
    begin
      authenticate!
      process
    rescue ActiveRecord::RecordNotFound => _
      raise NotFound
    end
  end

  protected

  def current_user_id
    return if @user.blank?
    {
      user_id: @user.id
    }
  end

  private
  class << self
    attr_accessor :require_authen

    def require_authen!
      self.require_authen = true
    end
  end

  def process
    raise NotImplementedError
  end
end
