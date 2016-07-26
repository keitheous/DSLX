Rails.application.routes.draw do
  resources :users

  get '/' => 'home#index'
  post '/login' => 'sessions#login'
  get '/logout' => 'sessions#logout'
  post '/users/url' => 'users#url'
end
