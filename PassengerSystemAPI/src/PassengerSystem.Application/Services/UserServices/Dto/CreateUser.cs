using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PassengerSystem.Application.Services.UserServices.Dto
{
    public class CreateUser
    {
        public string FullName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
