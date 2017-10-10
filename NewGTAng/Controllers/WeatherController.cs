using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace NewGTAng.Controllers
{
    [Route("api/[controller]")]
    public class WeatherController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("[action]/{city}")]
        public IActionResult City(string city)
        {
            return Ok(new { Temp = "12", Summary = "Delhi weather", City = city,Area=1200 });
        }
        //[HttpPost("[action]/{PostCity}")]
        //public string PostCity([FromUri]  )
        //{
        //    return "test";
        //}

        [HttpPost]
        public IActionResult PostCity([FromBody] Weather weather)
        {
            return Ok("Hello");
        }
    }
}