module V1
  class ReferralEmailInvitationPolicies
    def valid_or_skip?(email, name)
      skip?(email, name) || valid?(email, name)
    end

    def valid?(email, name)
      email.present? && name.present? && email_valid?(email)
    end

    private

    def skip?(email, name)
      email.blank? || name.blank?
    end


    def email_valid?(email)
      !InvitedReferral.exists?(email: email) && !User.exists?(email: email)
    end
  end
end