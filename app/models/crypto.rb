class Crypto < ApplicationRecord
  validates :name, :symbol, presence: true, uniqueness: true

  has_many :watchlist_items,
    foreign_key: :crypto_sym,
    class_name: 'WatchlistItem'
  has_many :watchlist_users,
    through: :watchlist_items,
    source: :user
end