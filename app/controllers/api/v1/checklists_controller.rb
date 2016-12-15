module Api
  module V1
    class ChecklistsController < ApplicationController
      def mark_done
        execute
      end
    end
  end
end