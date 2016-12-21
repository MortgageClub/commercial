class BadCredentials < BaseError
  def initialize(error = 'Invalid login credentials. Please try again.')
    @error = error
  end

  def code
    'BAD_CREDENTIALS'
  end

  def status
    401
  end
end
