using Microsoft.AspNetCore.Mvc;

namespace PassengerSystem.API.Controllers
{
    public class PassengerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
