class WatchlistItem < ApplicationRecord

  validates :crypto_sym, uniqueness: { scope: :user_id }

  belongs_to :user
  
  belongs_to :crypto,
  foreign_key: :crypto_sym,
  class_name: 'Crypto'

end