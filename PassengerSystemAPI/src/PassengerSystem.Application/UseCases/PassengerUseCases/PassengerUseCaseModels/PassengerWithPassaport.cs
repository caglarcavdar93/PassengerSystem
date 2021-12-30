using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Domain.Exceptions;
using PassengerSystem.Domain.ValueObjects;

namespace PassengerSystem.Application.UseCases.PassengerUseCases.PassengerUseCaseModels
{
    public class PassengerWithPassaport : IValidation<PassengerValidationModel>
    {
        public PassengerValidationModel ValidationModel { get; set; }

        public void Validate()
        {
           if(ValidationModel == null)
                throw new ArgumentNullException("Passenger");
           
           if(string.IsNullOrEmpty(ValidationModel.DocumentNo))
                throw new ArgumentNullException(nameof(ValidationModel.DocumentNo));

            if (ValidationModel.DocumentNo.Length != 11)
                throw new FieldValidationException(nameof(ValidationModel.DocumentNo));
        }
    }
}
