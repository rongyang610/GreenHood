class WatchlistItem < ApplicationRecord

  validates :crypto_sym, uniqueness: { scope: :user_id }

  belongs_to :user

end