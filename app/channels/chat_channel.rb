class ChatChannel < ApplicationCable::Channel



  def subscribed
    byebug
	  SubChannel = Chat.find_by(id: params[:id])
    stream_for SubChannel
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end


end