using OfficeOpenXml;
using ProAFSolutionsAPI.Models;
using ProAFSolutionsAPI.Providers;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProAFSolutionsAPI.Controllers
{
    public class StatsReportController : Controller
    {

        public ActionResult RunAccessReport()
        {
            var templateFile = new FileInfo(Server.MapPath("~/App_Data/Stats/ProAF-Stats-Report.xlsx"));
            byte[] result;
            using (var excelDoc = new ExcelPackage(templateFile))
            {
                var accessStats = AppServicesProvider.StatsService.GetAccessStats();

                PopulateAccessStatsWorkSheet(excelDoc.Workbook.Worksheets["ProAF-Stats"], accessStats);

                result = excelDoc.GetAsByteArray();
            }
            return File(result, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "ProAF-Stats-Report.xlsx");
        }


        private void PopulateAccessStatsWorkSheet(ExcelWorksheet accessStatsWorksheet, List<StatsModel> accessStats)
        {
            var rowIndex = 5;
            accessStats.ForEach(M =>
            {
                var colIndex = 1;
                accessStatsWorksheet.Cells[rowIndex, colIndex++].Value = M != null ? M.City : "";
                accessStatsWorksheet.Cells[rowIndex, colIndex++].Value = TimeZoneInfo.ConvertTimeFromUtc(M.UtcDate, TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time"));
                accessStatsWorksheet.Cells[rowIndex, colIndex++].Value = M.IP;
                accessStatsWorksheet.Cells[rowIndex, colIndex++].Value = M != null ? M.Lat : "";
                accessStatsWorksheet.Cells[rowIndex, colIndex++].Value = M != null ? M.Lon : "";                

                rowIndex++;
            });

            PopulateSummaryCells(accessStatsWorksheet, accessStats.Count);
        }

        private void PopulateSummaryCells(ExcelWorksheet accessStatsWorksheet, int totalVisits)
        {
            //total visits
            accessStatsWorksheet.Cells[4,9].Value = totalVisits;
            //report date
            accessStatsWorksheet.Cells[5, 9].Value = DateTime.Now;
        }
    }


}