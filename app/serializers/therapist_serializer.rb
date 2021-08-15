class TherapistSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :age, :speciality, :phone_number

  has_many :appointments
  has_many :reviews

end
