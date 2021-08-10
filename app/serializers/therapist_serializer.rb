class TherapistSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :age, :speciality, :phone_number
end
