class UserSerializer < ActiveModel::Serializer
  attributes :id, :image, :first_name, :last_name, :birthday, :username, :email, :password


end
