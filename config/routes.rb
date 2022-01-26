Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :rewards
    resources :habits
    resources :activities
    resources :tasks do
      resources :checklists
    end
    post '/update-points', to: 'users#update_points'
  end



end
