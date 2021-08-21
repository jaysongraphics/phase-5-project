class CreateTweets < ActiveRecord::Migration[6.1]
  def change
    create_table :tweets do |t|
      t.string :tweet
      t.integer :user_id

      # t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
