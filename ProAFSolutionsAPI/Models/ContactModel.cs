using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProAFSolutionsAPI.Models
{
    public class ContactModel
    {
        public string Name { set; get; }
        public string Email { set; get; }
        public string Subject { set; get; }
        public string Message { set; get; }
        public string Phone { set; get; }
    }
}