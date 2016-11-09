using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProAFSolutionsAPI.Models
{
    public class StatsModel
    {
        public string IP { set; get; }
        public string City { set; get; }
        public DateTime UtcDate { set; get; }
        public string TimeZone { set; get; }
        public string Lat { set; get; }
        public string Lon { set; get; }
    }
}