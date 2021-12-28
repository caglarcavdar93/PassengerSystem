using Microsoft.AspNetCore.Mvc;

namespace PassengerSystem.API.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
