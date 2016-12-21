Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "home#index"

  get "/manage/login", to: "sessions#new", as: "sessions_new"
  post "/manage/login", to: "sessions#create", as: "sessions_create"
  get "/manage/logout", to: "sessions#destroy", as: "sessions_logout"

  get '/*all', constraints: AppConstraint.new, to: 'home#index'

  resources :sendgrid_webhooks, only: [] do
    collection do
      post "receive"
    end
  end

  namespace :admins do
    resources :document_types
    resources :loan_faqs
    resources :blogs
    resources :loan_member_titles
    resources :loan_members
    resources :assigned_loan_members
  end

  namespace :advisors do
    resources :loans, only: :index do
      resources :documents
      resources :checklists
      resources :sent_emails, only: [:index, :create]
    end
  end

  namespace :api do
    scope module: :v1, constraints: ApiConstraint.new(version: :v1) do
      resources :sessions, only: [:create] do
        delete :destroy, on: :collection
      end

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

      resources :loans, only: [:index, :create, :show] do
      end

      resources :invited_referrals, only: [:index] do
      end

      resources :documents, only: [] do
        collection do
          post :upload
        end
      end
      resources :referral_email_invitations, only: [:create]
      resources :loan_faqs, only: :index
      resources :blogs, only: [:index, :show] do
      end
    end
  end
end
