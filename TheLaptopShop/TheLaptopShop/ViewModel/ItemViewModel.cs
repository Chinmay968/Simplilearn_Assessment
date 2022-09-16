using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TheLaptopShop.ViewModel
{
    public class ItemViewModel
    {
        public Guid Item_id { get; set; }
        public int Category_id { get; set; }
        public string Item_Code { get; set; }
        public string Item_Name { get; set; }
        public string Description { get; set; }
        public decimal Item_Price { get; set; }
        public HttpPostedFileBase Image_Path { get; set; }
        public IEnumerable<SelectListItem> CategorySelectListItem { get; set; }

    }
}