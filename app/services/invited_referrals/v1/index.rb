module InvitedReferrals
  module V1
    class Index < Service
      require_authen!

      def process
        InvitedReferral.where(user: user).order(created_at: :desc).map { |invited_referral| InvitedReferralsSerializer.new(invited_referral) }
      end
    end
  end
end
