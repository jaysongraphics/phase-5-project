Rails.application.routes.draw do
  resources :messages, only: [:index, :create]
  resources :chats, only: [:index, :create, :show, :update]
  resources :tweets, only: [:index, :create, :destroy]
  resources :reviews, only: [:index, :create, :destroy]
  resources :appointments, only: [:index, :create, :destroy]
  resources :therapists, only: [:index]
  resources :users, only: [:index, :show, :destroy]

  get "/me", to: "users#me"
  patch "/me", to: "users#update"
  post "/signin", to: "users#signin"
  post "/signup", to: "users#signup"
  delete "/signout", to: "users#destroy"

  
  mount ActionCable.server => '/cable'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
