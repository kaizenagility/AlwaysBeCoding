class ChangeLogTable < ActiveRecord::Migration[5.1]
  def change
    add_column :logs, :link, :string
    remove_column :logs, :minutes, :integer
    add_column :logs, :time, :integer
  end
end
