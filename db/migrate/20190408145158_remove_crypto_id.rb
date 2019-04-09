class RemoveCryptoId < ActiveRecord::Migration[5.2]
  def change
    remove_index :watchlists, :crypto_id
    add_index :watchlists, :crypto_id
  end
end
