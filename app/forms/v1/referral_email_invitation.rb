module V1
  class ReferralEmailInvitation
    include ActiveModel::Model
    include Virtus.model

    attribute :user_id, Fixnum
    attribute :email_1, String
    attribute :name_1, String
    attribute :phone_1, String
    attribute :email_2, String
    attribute :name_2, String
    attribute :phone_2, String
    attribute :email_3, String
    attribute :name_3, String
    attribute :phone_3, String

    def save
      if valid?
        [].tap do |invited_referrals|
          invited_referrals << create_referral(email_1, name_1, phone_1, user_id)
          invited_referrals << create_referral(email_2, name_2, phone_2, user_id)
          invited_referrals << create_referral(email_3, name_3, phone_3, user_id)
        end.compact
      else
        false
      end
    end

    private

    def create_referral(email, name, phone, user_id)
      return unless ::V1::ReferralEmailInvitationPolicies.new.valid?(email, name)

      InvitedReferral.create(email: email, name: name, phone: phone, user_id: user_id)
    end

    def valid?
      ::V1::ReferralEmailInvitationPolicies.new.valid_or_skip?(email_1, name_1) &&
          ::V1::ReferralEmailInvitationPolicies.new.valid_or_skip?(email_2, name_2) &&
          ::V1::ReferralEmailInvitationPolicies.new.valid_or_skip?(email_3, name_3)
    end
  end
end