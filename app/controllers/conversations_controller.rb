class ConversationsController < ApplicationController
    # before_action :authenticate, only: [:index, :create]
    # skip_before_action :authenticate

        def index
          conversations = Conversation.all
          render json: conversations
        end
      
        def create
            # byebug
          conversation = Conversation.new(conversation_params)
          if conversation.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
              ConversationSerializer.new(conversation)
            ).serializable_hash
            ActionCable.server.broadcast 'conversations_channel', serialized_data
            head :ok
          end
        end
        
 private
        
        def conversation_params
          params.require(:conversation).permit(:title)
          
        end
  

end
