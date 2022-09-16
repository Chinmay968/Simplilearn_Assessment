using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TheLaptopShop.Models;
using TheLaptopShop.ViewModel;

namespace TheLaptopShop.Controllers
{
    public class ItemController : Controller
    {
        private ECommDBEntities objECommDBEntities;
        public ItemController()
        {
            objECommDBEntities = new ECommDBEntities();
        }
        // GET: Item
        public ActionResult Index()
        {
            ItemViewModel objItemViewModel = new ItemViewModel();
            objItemViewModel.CategorySelectListItem = (from objCat in objECommDBEntities.Categories
                                                       select new SelectListItem()
                                                       {
                                                           Text = objCat.Category_Name,
                                                           Value = objCat.Category_id.ToString(),
                                                           Selected = true
                                                       });
            return View(objItemViewModel);
        }

        [HttpPost]
        public JsonResult Index(ItemViewModel objItemViewModel)
        {
            string NewImage = Guid.NewGuid() + Path.GetExtension(objItemViewModel.Image_Path.FileName);
            objItemViewModel.Image_Path.SaveAs(filename: Server.MapPath("~/Images/" + NewImage));

            Item objItem = new Item();
            objItem.Image_Path = "~/Images/" + NewImage;
            objItem.Category_id = objItemViewModel.Category_id;
            objItem.Description = objItemViewModel.Description;
            objItem.Item_Code = objItemViewModel.Item_Code;
            objItem.Item_id = Guid.NewGuid();
            objItem.Item_Name = objItemViewModel.Item_Name;
            objItem.Item_Price = objItemViewModel.Item_Price;   
            objECommDBEntities.Items.Add(objItem);
            objECommDBEntities.SaveChanges();

            return Json(data:new {Success = true, Message = "Item Added Successfully "}, JsonRequestBehavior.AllowGet);
        }
    }
}