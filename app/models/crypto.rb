class Crypto < ApplicationRecord
  validates :name, :symbol, presence: true, uniqueness: true

  has_many :watchlist_items
  has_many :watchlist_users
    through: :watchlist_items,
    source: :user
end