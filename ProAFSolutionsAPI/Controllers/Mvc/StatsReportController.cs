using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FSRSurveys.API.Controllers
{
    public class StatsReportController : Controller
    {      

        // GET: Report
        //public ActionResult RunReport()
        //{
        //    var templateFile = new FileInfo(Server.MapPath("~/Views/Report/FSRSurveyTemplate.xlsx"));
        //    byte[] result;
        //    using (var excelDoc = new ExcelPackage(templateFile))
        //    {
        //        var users = _surveyService.GetAllUsers();

        //        PopulateManagersWorkSheet(excelDoc.Workbook.Worksheets["MANAGER"], users);

        //        PopulateAdminsWorkSheet(excelDoc.Workbook.Worksheets["ADMIN"], users);

        //        PopulateAssistantsWorkSheet(excelDoc.Workbook.Worksheets["ASSISTANT"], users);

        //        result = excelDoc.GetAsByteArray();
        //    }
        //    return File(result, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "FSRSurveyTemplate.xlsx");
        //}


        //#region Populate Excel

        //private void PopulateManagersWorkSheet(ExcelWorksheet managersWorksheet, List<UserInfo> users)
        //{
        //    var dataSource = users.OfType<ManagerInfo>().ToList();

        //    var rowIndex = 2;            
        //    dataSource.ForEach(M =>
        //    {
        //        var colIndex = 1;
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = "Property Manager";
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.Name;
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.Email;
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.PropertyType;
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.PropertyName;
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.MarketName;
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.City;               
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.PropertiesTotal;
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.UnitsTotal;              
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.TotalNumberBoardMeetingAttendedPerYear;
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.RdSupervisorName;
        //        managersWorksheet.Cells[rowIndex, colIndex++].Value = M.VpSupervisorName;

        //        PopulateCommonDataCells(managersWorksheet, M.SurveyAnswers, rowIndex, colIndex);

        //        rowIndex++;
        //    });                
        //}
     
    }

    
}