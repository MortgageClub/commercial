module ApplicationHelper
  def alert_class_for(flash_type)
    {
      success: "alert-success",
      error: "alert-danger",
      notice: "alert-info"
    }[flash_type.to_sym]
  end

  def flash_messages(opts = {})
    flash.map do |msg_type, message|
      content_tag :div, class: "alert #{alert_class_for(msg_type)} alert-styled-left alert-arrow-left alert-bordered" do
        concat content_tag(:button, content_tag(:span, "×"), class: 'close', type: "button", "data-dismiss": "alert")
        concat content_tag :span, message
      end
    end.join.html_safe
  end

  def form_error(object, field_name)
    if object.errors.any?
      unless object.errors.messages[field_name].blank?
        content_tag :div, object.errors.messages[field_name].join(", "), class: "color-red"
      end
    end
  end
end

