using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public ApplicationDBContext context = new ApplicationDBContext();

        // GET: api/<ProductsController>
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            var products = context.Products.ToList();
            return Ok(products);
        }

        // GET api/<ProductsController>/5
        [HttpGet("{id}")]
        public ActionResult<Product> Get(int id)
        {
            var product = context.Products.Find(id);
            if (product == null)
                return NotFound();
            return product;

        }

        // POST api/<ProductsController>
        [HttpPost]
        public ActionResult Post([FromBody] Product product)
        {
            context.Products.Add(product);
            context.SaveChanges();
            return Created("Get", new { id = product.ProductId });

        }

        // PUT api/<ProductsController>/5
        [HttpPut("{id}")]
        //[HttpPut]
        public ActionResult Put(int id, [FromBody] Product product)
        //public ActionResult Put( [FromBody] Product product)
        {
            var productt = context.Products.Find(product.ProductId);

            if (productt == null)
                return BadRequest();
            context.Products.Update(productt);
            context.SaveChanges();
            return Ok();

        }

        // DELETE api/<ProductsController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var product = context.Products.Find(id);
            if (product == null)
                return NotFound();
            context.Products.Remove(product);
            context.SaveChanges();
            return Ok();
        }
    }
}