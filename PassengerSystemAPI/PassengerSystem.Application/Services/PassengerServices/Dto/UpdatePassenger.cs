using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PassengerSystem.Application.Services.PassengerServices.Dto
{
    public record UpdatePassenger : CreatePassenger
    {
        public string Id { get; set; }
    }
}
