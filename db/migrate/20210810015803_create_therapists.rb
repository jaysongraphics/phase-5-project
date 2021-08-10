class CreateTherapists < ActiveRecord::Migration[6.1]
  def change
    create_table :therapists do |t|
      t.string :image
      t.string :name
      t.integer :age
      t.string :speciality
      t.string :phone_number

      t.timestamps
    end
  end
end
