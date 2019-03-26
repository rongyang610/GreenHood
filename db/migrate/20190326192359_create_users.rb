class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fname, null: false, index: { unique: true}
      t.string :lname, null: false, index: { unique: true}
      t.string :email, null: false, index: { unique: true}
      t.string :session_token, null: false, index: { unique: true}
      t.string :password_digest, null: false
      t.float :portfolio_value, null: false
      t.float :buy_power, null: false
      t.timestamps
    end
  end
end
