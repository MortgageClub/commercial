class AppConstraint
  def matches?(request)
    !request.url.include?('/api') && !request.url.include?('/admins') && !request.url.include?('/manage') && !request.url.include?('/advisors') && !request.url.include?('/sendgrid_webhooks')
  end
end
