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

        public void SendMessage(string name, string message, string roomName)
        {
            Clients.Group(roomName).GetMessage(name, message);
        }

        public Task JoinRoom(string roomName)
        {
            return Groups.Add(Context.ConnectionId, roomName);
        }

        public Task JoinRoomFromAdminApp(string adminCode, string roomName)
        {
            if (adminCode.Equals(ConfigurationManager.AppSettings["adminCode1"]) ||
                adminCode.Equals(ConfigurationManager.AppSettings["adminCode2"])) {
                return Groups.Add(Context.ConnectionId, roomName);
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
            // Add your own code here.
            // For example: in a chat application, record the association between
            // the current connection ID and user name, and mark the user as online.
            // After the code in this method completes, the client is informed that
            // the connection is established; for example, in a JavaScript client,
            // the start().done callback is executed.
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            // Add your own code here.
            // For example: in a chat application, mark the user as offline, 
            // delete the association between the current connection id and user name.
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