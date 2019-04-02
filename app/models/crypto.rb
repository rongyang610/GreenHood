class Crypto < ApplicationRecord
  validates :name, :symbol, presence: true, uniqueness: true
end