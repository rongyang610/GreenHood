class WatchlistItem < ApplicationRecord

  validates :crypto_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :crypto

end