class MessagesController < ApplicationController

        def create
            @message = Message.create(message_params)
            @chat = Chat.find(@message[:chat_id])
            chat_channel.broadcast_to(@chat, @message)
            render json: @message
        end

private

        def message_params
            params.permit(:content, :chat_id, :user_id, :read)
        end

end
