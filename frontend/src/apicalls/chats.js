import { axiosInstance } from ".";

export const getAllChatsByUser = async() => {
    try{ 
        const response = await axiosInstance.get('/api/chats/getAllChatsByUser')
        return response.data
    }
    catch(error){
        return error.response.data
    }
}

export const createNewChat = async(members) => {
    try{ 
        const response = await axiosInstance.post('/api/chats/createNewChat',{members,})
        return response.data
    }
    catch(error){
        return error.response.data
    }
}

export const ClearChatMessages = async (chatId) => {
    try {
      const response = await axiosInstance.post("/api/chats/clearUnreadMessages", {
        chat: chatId,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
}
