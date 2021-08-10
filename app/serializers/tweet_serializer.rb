class TweetSerializer < ActiveModel::Serializer
  attributes :id, :tweet

  has_one :user
end
