Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :tasks
    resources :rewards
    resources :habits
    resources :activities
    post '/update-points', to: 'users#update_points'
  end

end
