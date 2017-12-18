class ChangeTimeType < ActiveRecord::Migration[5.1]
  def change
    remove_column :logs, :time, :integer
    add_column :logs, :time, :string
  end
end
