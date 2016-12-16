class AppConstraint
  def matches?(request)
    !request.url.include?('/api') && !request.url.include?('/admin') && !request.url.include?('/manager') && !request.url.include?('/advisors')
  end
end
