Rails.application.routes.draw do
  resources :tweets, only: [:index]
  resources :reviews, only: [:index]
  resources :appointments, only: [:index]
  resources :therapists, only: [:index]
  resources :users, only: [:index, :create, :show]


  get "/me", to: "sessions#show"

  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"







  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
