using Microsoft.AspNetCore.Cors;
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
    [EnableCors("MyPolicyOrigin")]
    public class UsersController : ControllerBase
    {

        public ApplicationDBContext context = new ApplicationDBContext();

        // GET: api/<UsersController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            //return new string[] { "value1", "value2" };
            var users = context.Users.ToList();
            return users;

        }

        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            var user = context.Users.Find(id);
            //if (user == null) { return NotFound(); }

            return user;
            //return "value";
        }

        // POST api/<UsersController>
        [HttpPost]
        public void Post([FromBody] User user)
        {
            context.Users.Add(user);
            context.SaveChanges();

        }

        // PUT api/<UsersController>/5
        [HttpPut]
        public void Put([FromBody] User user)
        {
            context.Users.Update(user);
            context.SaveChanges();
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var user = context.Users.Find(id);
            context.Users.Remove(user);
            context.SaveChanges();
        }
    }
}