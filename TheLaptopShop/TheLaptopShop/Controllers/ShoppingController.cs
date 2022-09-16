using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TheLaptopShop.Models;
using TheLaptopShop.ViewModel;

namespace TheLaptopShop.Controllers
{
    public class ShoppingController : Controller
    {
        private ECommDBEntities objECommDBEntities;
        private List<ShoppingCartModel> listOfShoppingCartModel;

        public ShoppingController()
        {
            objECommDBEntities = new ECommDBEntities();
            listOfShoppingCartModel = new List<ShoppingCartModel>();
        }
        // GET: Shopping
        public ActionResult Index()
        {
            IEnumerable<ShoppingViewModel> listOfShoppingViewModel = (from objItem in objECommDBEntities.Items
                                                                      join
                                                                      objCate in objECommDBEntities.Categories
                                                                      on objItem.Category_id equals objCate.Category_id
                                                                      select new ShoppingViewModel()
                                                                      {
                                                                          Image_Path = objItem.Image_Path,
                                                                          Item_Name = objItem.Item_Name,
                                                                          Description = objItem.Description,
                                                                          Item_Price = objItem.Item_Price,
                                                                          Item_id = objItem.Item_id,
                                                                          Category = objCate.Category_Name,
                                                                          Item_Code = objItem.Item_Code
                                                                      }
                                                                      ).ToList();

            return View(listOfShoppingViewModel);
        }

        [HttpPost]
        public JsonResult Index(string Item_id)
        {
            ShoppingCartModel objShoppingCartModel = new ShoppingCartModel();
            Item objItem = objECommDBEntities.Items.Single(model => model.Item_id.ToString() == Item_id);
            if (Session["CartCounter"] != null)
            {
                listOfShoppingCartModel = Session["CartItem"] as List<ShoppingCartModel>;
            }
            if(listOfShoppingCartModel.Any(model => model.Item_id == Item_id))
            {
                objShoppingCartModel = listOfShoppingCartModel.Single(model => model.Item_id == Item_id);
                objShoppingCartModel.Quantity = objShoppingCartModel.Quantity + 1;
                objShoppingCartModel.Total = objShoppingCartModel.Quantity * objShoppingCartModel.UnitPrice;
            }
            else
            {
                objShoppingCartModel.Item_id = Item_id;
                objShoppingCartModel.Image_Path = objItem.Image_Path;
                objShoppingCartModel.Item_Name = objItem.Item_Name;
                objShoppingCartModel.Quantity = 1;
                objShoppingCartModel.Total = objItem.Item_Price;
                objShoppingCartModel.UnitPrice = objItem.Item_Price;
                listOfShoppingCartModel.Add(objShoppingCartModel);
            }

            Session["CartCounter"] = listOfShoppingCartModel.Count;
            Session["CartItem"] = listOfShoppingCartModel;

            return Json(data:new {Sucess = true, Counter = listOfShoppingCartModel.Count}, JsonRequestBehavior.AllowGet); 
        }

        public ActionResult ShoppingCart()
        {
            listOfShoppingCartModel = Session["CartItem"] as List<ShoppingCartModel>;
            return View(listOfShoppingCartModel);
        }
    }
}