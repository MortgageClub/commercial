class AppConstraint
  def matches?(request)
    !request.url.include?('/api')
  end
end
