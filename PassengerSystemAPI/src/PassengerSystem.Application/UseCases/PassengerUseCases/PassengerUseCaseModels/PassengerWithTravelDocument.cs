using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PassengerSystem.Application.UseCases.PassengerUseCases.PassengerUseCaseModels
{
    public class PassengerWithTravelDocument : IValidation<PassengerValidationModel>
    {
        public PassengerValidationModel ValidationModel { get; set; }

        public void Validate()
        {
            throw new NotImplementedException();
        }
    }
}
