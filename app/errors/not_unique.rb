class NotUnique < BaseError
  def initialize(error = 'Not unique')
    @error = error
  end

  def code
    'NOT_UNIQUE'
  end

  def status
    422
  end
end
