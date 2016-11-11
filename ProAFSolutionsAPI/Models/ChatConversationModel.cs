using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProAFSolutionsAPI.Models
{
    
    public class ChatConversationModel
    {
        public string Room { get; set;  }

        public List<ChatMessage> Messages { get; set; }

    }
}