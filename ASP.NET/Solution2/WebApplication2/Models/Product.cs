using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Title { get; set; }
        public string Price { get; set; }
        public string Qty { get; set; }
        public string PCategory { get; set; }
        public string PType { get; set; }
        public string CompanyBrand { get; set; }
        public string ImageSrc { get; set; }
        public string Available { get; set; }

    }
}