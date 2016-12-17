module ReferralEmailInvitations
  module V1
    class Create < Service
      require_authen!

      def process
        raise NotImplementedError
      end
    end
  end
end
