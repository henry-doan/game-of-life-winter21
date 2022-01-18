Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :tasks
  end

  namespace :api do
    resources :rewards
  end

  namespace :api do
    resources :tasks
  end

  namespace :api do
    resources :habits
  end


end
