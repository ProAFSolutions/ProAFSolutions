using Microsoft.Practices.EnterpriseLibrary.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProAFSolutionsAPI.Providers
{
    public static class LoggerProvider
    {

        static LoggerProvider() {
            Logger.SetLogWriter(new LogWriterFactory().Create());        
        }

        public static void WriteLog(LogEntry Entry)
        {
            Logger.Write(Entry);            
        }

        public static void WriteLog(string Message, TraceEventType Type)
        {
            WriteLog(new LogEntry
            {
                Message = Message,
                Severity = Type                              
            });
        }

        public static void Info(string Message)
        {
            WriteLog(Message, TraceEventType.Information);
        }

        public static void Error(string Message)
        {
            WriteLog(Message, TraceEventType.Error);
        }        
    }
}
