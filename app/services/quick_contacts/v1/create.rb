module QuickContacts
  module V1
    class Create < Service
      def process
        QuickContactMailer.send_email(params).deliver_now

        true
      end
    end
  end
end
