class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :image, :first_name, :last_name, :birthday, :username, :email, :avatar

  has_many :appointments
  has_many :tweets
  has_many :reviews
 
  def avatar
      if object.avatar.attached?
        {
          url: rails_blob_url(object.avatar)
        }
      end
  end
  
end
