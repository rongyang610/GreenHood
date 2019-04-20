class TradeHistory < ApplicationRecord
  validates :crypto_amount, :crypto_sym, presence: true

  belongs_to :user
end