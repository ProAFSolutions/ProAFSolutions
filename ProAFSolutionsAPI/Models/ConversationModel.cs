using System.Collections.Generic;

namespace ProAFSolutionsAPI.Models
{
    public class ConversationModel
    {
        public string Room { set; get; }

        public List<ChatMessage> Messages { get; set; }
    }   
    
    public class ChatMessage
    {
        public string Name { set; get; }
        public string RoomName { set; get; }
        public string Text { set; get; }
        public string Datetime { set; get; }
    }
}