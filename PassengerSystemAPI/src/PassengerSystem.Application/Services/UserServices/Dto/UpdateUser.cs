using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PassengerSystem.Application.Services.UserServices.Dto
{
    public class UpdateUser : CreateUser
    {
        public string UserId { get; set; }
    }
}
