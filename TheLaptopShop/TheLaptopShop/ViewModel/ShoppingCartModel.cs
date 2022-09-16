using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheLaptopShop.ViewModel
{
    public class ShoppingCartModel
    {
        public string Item_id { get; set; }
        public decimal Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Total { get; set; }
        public string Image_Path { get; set; }
        public string Item_Name { get; set; }
    }
}