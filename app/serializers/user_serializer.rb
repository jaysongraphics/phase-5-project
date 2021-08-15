class UserSerializer < ActiveModel::Serializer
  attributes :id, :image, :first_name, :last_name, :birthday, :username, :email

  has_many :appointments
  has_many :tweets
  has_many :reviews
end
