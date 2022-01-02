using Microsoft.AspNetCore.Mvc;
using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Domain.ValueObjects;

namespace PassengerSystem.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly IUserLoginUseCase _loginUseCase;
        public UserController(IUserLoginUseCase loginUseCase)
        {
            _loginUseCase = loginUseCase;
        }
        [HttpPost]
        [Route("/Login")]
        public UserTokenResult Login([FromBody] UserLoginModel userLogin)
        {
           return _loginUseCase.AuthenticateUser(userLogin);
        }
    }
}
