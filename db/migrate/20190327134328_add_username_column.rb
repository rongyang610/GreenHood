class AddUsernameColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: false, index: { unique: true}
  end
end
