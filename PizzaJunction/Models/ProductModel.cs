using PizzaPortal.Entities;

namespace PizzaPortal.Models
{
    public class ProductModel
    {
        private List<Product> Products;

        public ProductModel()
        {
            Products = new List<Product>()
            {
                new Product
                {
                    Id = "01",
                    Name = "Supreme Veg Pizza",
                    Price =420,
                    Photo = "Supreme.jpg"
                },

                new Product
                {
                    Id = "02",
                    Name = "Butter Chicken Pizza",
                    Price =450,
                    Photo = "Butter.jpg"
                },
                new Product
                {
                    Id = "03",
                    Name = "Tandoori Paneer Pizza",
                    Price =410,
                    Photo = "Tandoori.png"
                },
                new Product
                {
                    Id = "04",
                    Name = "BBQ Chicken Pizza",
                    Price =380,
                    Photo = "BBQ.jfif"
                },
                new Product
                {
                    Id = "05",
                    Name = "Chicken Tikka Pizza",
                    Price =500,
                    Photo = "Chicken.jpg"
                },
                new Product
                {
                    Id = "06",
                    Name = "Paneer Chilly Pizza",
                    Price =480,
                    Photo = "Paneer.jpg"
                }
            };
        }
        public List<Product> findAll()
        {
            return Products;
        }

        public Product find(string id)
        {
            //return Products.Where(p => p.Id == id).FirstOrDefault();
            return Products.Where(p => p.Id == id).FirstOrDefault();
        }

    }
}
