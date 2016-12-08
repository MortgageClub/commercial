module Users
  module V1
    class Fetch < Service
      require_authen!

      def process
        @user
      end
    end
  end
end
