using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace ProAFSolutionsAPI.Chat
{
    public class ChatHub : Hub
    {
        public void SendMessage(string email, string message)
        {
            Clients.All.broadcastMessage(email, message);
        }
    }
}