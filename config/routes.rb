Rails.application.routes.draw do
  get 'search/index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  get '/users/search' => 'users#search'
  post '/users/test' => 'users#test'
  resources :users

  get '/' => 'home#index'
  post '/login' => 'sessions#login'
  get '/logout' => 'sessions#logout'
  post '/users/url' => 'users#url'
end
