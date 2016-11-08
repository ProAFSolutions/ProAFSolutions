using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;
using System.Configuration;

namespace ProAFSolutionsAPI.Hubs
{

    public class ChatRoomHub : Hub
    {

        public void SendMessage(string name, string message, string room)
        {
            Clients.Group(room).GetMessage(name, message);
        }

        public Task JoinRoom(string name, string room)
        {
            if (ChatConnectionsHandler.SetUserData(Context.ConnectionId, name, room)) {
                return Groups.Add(Context.ConnectionId, room);
            }
            return null;  
        }

        public Task JoinRoomFromAdminApp(string adminCode, string room)
        {
            if (adminCode.Equals(ConfigurationManager.AppSettings["adminCode"]) && ChatConnectionsHandler.SetAdminData(Context.ConnectionId)) {
                return Groups.Add(Context.ConnectionId, room);
            }
            return null;
        }

        public Task LeaveRooom(string roomName)
        {
            return Groups.Remove(Context.ConnectionId, roomName);
        }


        #region  Lifetime Events

        public override Task OnConnected()
        {
            ChatConnectionsHandler.Connections.Add(Context.ConnectionId, null);
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            ChatConnectionsHandler.Connections.Remove(Context.ConnectionId);
            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            // Add your own code here.
            // For example: in a chat application, you might have marked the
            // user as offline after a period of inactivity; in that case 
            // mark the user as online again.
            return base.OnReconnected();

        }
        #endregion



    }
}