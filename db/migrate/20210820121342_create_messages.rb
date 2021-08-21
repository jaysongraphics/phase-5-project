class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :text
      t.references :conversation, null: false, foreign_key: true
      
      # t.integer :conversation_id

      t.timestamps
    end
  end
end
