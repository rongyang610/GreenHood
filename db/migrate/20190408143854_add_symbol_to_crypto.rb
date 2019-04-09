class AddSymbolToCrypto < ActiveRecord::Migration[5.2]
  def change
    add_column :cryptos, :symbol, :string
  end
end
