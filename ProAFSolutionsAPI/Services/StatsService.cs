using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ProAFSolutionsAPI.Models;
using ProAFSolutionsAPI.Helpers;
using System.IO;
using ProAFSolutionsAPI.Util;

namespace ProAFSolutionsAPI.Services
{
    public interface IStatsService
    {
        List<Models.StatsModel> GetAccessStats();
        void WriteAccessStats(List<StatsModel> stats);
    }

    public class StatsService : IStatsService
    {
        private string path;

        public StatsService() {
            this.path = ResourceHelper.GetStatsPath("site-stats.json");
        }

        public List<StatsModel> GetAccessStats()
        {
            var statsList = new List<StatsModel>();            

            if (File.Exists(path))
            {
                var statsJson = File.ReadAllText(path);
                statsList = JsonHelper.Deserialize<List<StatsModel>>(statsJson);
            }

            return statsList;
        }

        public void WriteAccessStats(List<StatsModel> stats)
        {
            File.WriteAllText(path, JsonHelper.Serialize(stats));
        }
    }
}