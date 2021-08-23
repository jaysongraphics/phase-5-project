class ChatsController < ApplicationController

    def index
        chats = Chat.all
        render json: chats
    end 

    def create
        chat = Chat.create(chat_params)
        if chat.valid?
            render json: chat, status: :created
        else
            render json: {errors: chat.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        chatOne = Chat.find_by(id: params[:id])
        if chatOne
            render json: chatOne
        else
            render json: {errors: chatOne.errors.full_messages}, status: :unprocessable_entity
        end
    end


    private

    def chat_params
        params.permit(:user_id, :chat_name)

    end

end
