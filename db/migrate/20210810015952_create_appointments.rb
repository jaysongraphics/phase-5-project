class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :appointment_date
      t.string :appointment_time
      t.string :location

      t.integer :user_id
      t.integer :therapist_id


      # t.belongs_to :user, null: false, foreign_key: true
      # t.belongs_to :therapist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
