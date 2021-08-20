class MessagesChannel < ApplicationCable::Channel
  # before_action :authenticate, only: [:subscribed, :unsubscribed]

  def subscribed
    conversation = Conversation.find(params[:conversation])
    stream_for conversation
  end

  def unsubscribed
  end

end