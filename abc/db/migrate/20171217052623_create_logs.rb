class CreateLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :logs do |t|
      t.integer :minutes
      t.text :notes
      t.integer :category_id
      t.integer :user_id

      t.timestamps
    end
  end
end
