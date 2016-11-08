using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace ProAFSolutionsAPI.Hubs
{
   
    public class ChatUserData {

        public string Name { get; set; }

        public string Room { get; set; }

    }

    public static class ChatConnectionsHandler
    {
        private static IDictionary<string, ChatUserData> _connections = new Dictionary<string, ChatUserData>();

        public static IDictionary<string, ChatUserData> Connections
        {
            get
            {
                return _connections;
            }           
        }       

        public static bool SetUserData(string connectionId, string name, string room)
        {
            if (_connections.Keys.Contains(connectionId) && !RoomExists(room) && !name.Equals(ConfigurationManager.AppSettings["adminCode"]))
            {
                _connections[connectionId] = new ChatUserData { Name = name, Room = room };

                return true;
            }

            return false;
        }

        public static bool SetAdminData(string connectionId)
        {
            if (_connections.Keys.Contains(connectionId))
            {
                _connections[connectionId] = new ChatUserData { Name = ConfigurationManager.AppSettings["adminCode"], Room = null };

                return true;
            }

            return false;
        }

        public static List<ChatUserData> Users
        {
            get
            {
                return _connections.Values.Where(U => U != null && U.Room != null).ToList();
            }    
        }

        public static List<string> Rooms
        {
            get
            {
                return Users.Select(U => U.Room).ToList();
            }
        }

        private static bool RoomExists(string room)
        {
            return !string.IsNullOrWhiteSpace(room) && Rooms.SingleOrDefault(R => R.ToLower().Equals(room.ToLower())) != null;
        }


    }
}