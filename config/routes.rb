Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "home#index"

  resources :manager, only: [:index] do
    collection do
      post :login
      get :logout
    end
  end

  get '/*all', constraints: AppConstraint.new, to: 'home#index'

  namespace :admin do

  end

  namespace :api do
    scope module: :v1, constraints: ApiConstraint.new(version: :v1) do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/registrations'
      }

      resources :users, only: [] do
        collection do
          get :fetch
        end
      end

      resources :checklists, only: [] do
        collection do
          post :mark_done
        end
      end

      resources :loans do
      end

      resources :documents, only: [] do
        collection do
          post :upload
        end
      end

      # resources :recipes, except: [:new, :edit] do
      #   member do
      #     post :add_ingredients
      #     post :add_directions
      #   end

      #   collection do
      #     get :completed
      #     get :feeds
      #   end
      # end

      # resource :completes, only: [:create, :destroy]
      # resources :reviews, only: [:create, :destroy]
    end
  end
end
