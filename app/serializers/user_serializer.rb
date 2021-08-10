class UserSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :birthday, :username, :email, :password_digest
end
