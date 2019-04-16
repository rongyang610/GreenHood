class TradeHistory < ApplicationRecord
  validates :crypto_amount, :crypto_sym, :buy_price, :sell_price, presence: true

  belongs_to :user
end