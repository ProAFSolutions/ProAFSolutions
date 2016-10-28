using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace ProAFSolutionsAPI.Services.Mail
{
    public class MailAttachment
    {
        private readonly FileInfo _file = null;      

        private readonly Stream _stream = null;
        private readonly string _name = null;
        
        
        public MailAttachment(FileInfo file) 
        {
            _file = file;
            _stream = null;
            _name = null;
        }

        public MailAttachment(Stream stream, string name)
        {
            _stream = stream;
            _name = name;
            _file = null;          
        }

        
        public FileInfo File
        {
            get { return _file; }
        }

        public Stream Stream
        {
            get { return _stream; }
        }

        public string Name
        {
            get { return _name; }
        } 

        public bool InMemory {
           
            get { return _stream != null;  }
       
        }

    }
}
