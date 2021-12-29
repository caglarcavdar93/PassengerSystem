using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Domain.ValueObjects;

namespace PassengerSystem.Application.UseCases.PassengerUseCases.PassengerUseCaseModels
{
    public class PassengerWithVisa : IValidation<PassengerValidationModel>
    {
        public PassengerValidationModel ValidationModel { get; set; }

        public void Validate()
        {
            throw new NotImplementedException();
        }
    }
}
