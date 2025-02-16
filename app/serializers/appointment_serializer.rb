class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appointment_date, :appointment_time, :location
  has_one :user
  has_one :therapist
end
