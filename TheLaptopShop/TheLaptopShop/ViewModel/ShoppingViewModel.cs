using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheLaptopShop.ViewModel
{
    public class ShoppingViewModel
    {
        public Guid Item_id { get; set; }
        public string Item_Name { get; set; }
        public decimal Item_Price { get; set; }
        public string Image_Path { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Item_Code { get; set; }

    }
}