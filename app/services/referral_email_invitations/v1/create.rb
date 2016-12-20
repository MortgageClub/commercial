module ReferralEmailInvitations
  module V1
    class Create < Service
      require_authen!

      def process
        created_form = ::V1::ReferralEmailInvitation.new(create_params.merge(current_user_id))
        invited_referrals = created_form.save

        if invited_referrals.present?
          SendReferralInvitationEmailJob.perform_later(@user.id, invited_referrals.map(&:id))
        end

        invited_referrals
      end

      private

      def create_params
        params.permit(
            :email_1,
            :name_1,
            :phone_1,
            :email_2,
            :name_2,
            :phone_2,
            :email_3,
            :name_3,
            :phone_3
        )
      end
    end
  end
end
