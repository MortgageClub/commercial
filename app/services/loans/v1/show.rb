module Users
  module V1
    class Show < Service
      require_authen!

      def process
        byebug
      end
    end
  end
end
