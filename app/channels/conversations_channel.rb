class ConversationsChannel < ApplicationCable::Channel
  before_action :authenticate, only: [:subscribed, :unsubscribed]
  
    def subscribed
      stream_from "conversations_channel"
    end

    def unsubscribed
    end


end