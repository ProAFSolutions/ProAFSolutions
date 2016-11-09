using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProAFSolutionsAPI.Util
{
    public class JsonHelper
    {
        public static string Serialize(Object data) {

            return JsonConvert.SerializeObject(data);
        }

        public static T Deserialize<T>(string json)
        {
            return JsonConvert.DeserializeObject<T>(json);
        }
    }
}