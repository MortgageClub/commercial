module Users
  module V1
    module ReferralCodeGenerator
      module_function

      def generate
        loop do
          random_code = SecureRandom.hex(4).to_s.upcase
          break random_code unless User.exists?(referral_code: random_code)
        end
      end
    end
  end
end
