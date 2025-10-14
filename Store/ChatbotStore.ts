import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:8000";

interface ChatbotData {
  _id?: string;
  chatbotName: string;
  botType: "text" | "voice" | "both";
  primaryColor: string;
  secondaryColor: string;
  position: "left" | "right";
  logo: string;
  tone: string;
  language: string;
  website_Url: string;
  documents: string;
  temperature: string;
  maxToken: string;
  LLM: string;
  firstMessage: string;
  systemPrompts: string;
}

interface ChatbotState {
  chatbotData: ChatbotData | null;
  userChatbots: ChatbotData[];
  singleChatbot: ChatbotData | null;
  isLoading: boolean;
  createChatbot: (data: ChatbotData) => Promise<void>;
  getUserChatbots: (userId: string) => Promise<void>;
  getSingleChatbot: (chatbotId: string) => Promise<void>;
}

export const useChatbotStore = create<ChatbotState>((set) => ({
  chatbotData: null,
  userChatbots: [],
  singleChatbot: null,
  isLoading: false,

  // ✅ Create chatbot
  createChatbot: async (data) => {
    set({ isLoading: true });
    try {
      console.log("📡 Creating Chatbot...", data);
      const response = await axios.post(`${BASE_URL}/create-chatbot`, data);
      set({ chatbotData: response.data });
      toast.success("✅ Chatbot created successfully!");
    } catch (error: any) {
      console.error("❌ Error creating chatbot:", error);
      toast.error(error.response?.data?.message || "Error creating chatbot");
    } finally {
      set({ isLoading: false });
    }
  },

  // ✅ Fetch user chatbots
  getUserChatbots: async (userId) => {
    try {
      console.log("📡 Fetching chatbots for user:", userId);
      const response = await axios.get(`${BASE_URL}/my-chatbots/${userId}`);
      set({ userChatbots: response.data });
      console.log("✅ Chatbots fetched:", response.data);
    } catch (error: any) {
      console.error("❌ Error fetching user chatbots:", error);
      toast.error(error.response?.data?.message || "Error fetching chatbots");
    }
  },

  // ✅ Fetch single chatbot
  getSingleChatbot: async (chatbotId) => {
    try {
      console.log("📡 Fetching chatbot:", chatbotId);
      const response = await axios.get(`${BASE_URL}/chatbot/${chatbotId}`);
      set({ singleChatbot: response.data });
      console.log("✅ Single chatbot fetched:", response.data);
    } catch (error: any) {
      console.error("❌ Error fetching single chatbot:", error);
      toast.error(error.response?.data?.message || "Error fetching chatbot");
    }
  },

  //
//   updateChatbot:async(data)=>{

//   },
}));
