using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PassengerSystem.Application.UseCases.PassengerUseCases.PassengerUseCaseModels
{
    public class PassengerValidationFactory
    {
        public static IValidation<PassengerValidationModel> CreatePassengerValidatable(PassengerValidationModel model)
        {
            
            switch (model.Citizenship)
            {
                case Domain.Enums.Citizenship.USA:
                    return new PassengerWithPassaport();
                case Domain.Enums.Citizenship.UK:
                    return new PassengerWithTravelDocument();
                case Domain.Enums.Citizenship.TR:
                    return new PassengerWithVisa();
                default:
                    return new PassengerWithVisa();
            }
        }
    }
}
