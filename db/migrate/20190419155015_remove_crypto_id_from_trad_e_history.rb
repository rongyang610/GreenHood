class RemoveCryptoIdFromTradEHistory < ActiveRecord::Migration[5.2]
  def change
    remove_column :trade_histories, :crypto_id
  end
end
