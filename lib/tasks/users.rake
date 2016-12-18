namespace :users do
  desc "Generate referral code for users"
  task generate_referral_code: :environment do
    User.where(referral_code: nil).each do |user|
      user.referral_code = Users::V1::ReferralCodeGenerator.generate
      user.save!
    end
  end
end
