Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show] do
      resources :watchlist_items, only: [:index, :create, :show, :destroy]
      resources :cryptos, only: [:index, :show, :create]
      resources :trade_histories, only: [:index, :create, :show]
    end
    resource :session, only: [:create, :destroy]
  end
end
