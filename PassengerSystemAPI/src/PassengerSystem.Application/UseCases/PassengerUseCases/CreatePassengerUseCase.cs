using CheckInSystem.Domain.Entities;
using PassengerSystem.Application.Services.PassengerServices;
using PassengerSystem.Application.Services.PassengerServices.Dto;
using PassengerSystem.Application.UseCases.PassengerUseCases.PassengerUseCaseModels;
using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Domain.ValueObjects;

namespace PassengerSystem.Application.UseCases.PassengerUseCases
{
    public class CreatePassengerUseCase : ICreatePassengerUseCase
    {
        private readonly IPassengerService _passengerService;
        public CreatePassengerUseCase(IPassengerService passengerService)
        {
            _passengerService = passengerService;
        }

        public async Task<Passenger> CreatePassenger(PassengerValidationModel model)
        {
            var validationObject = PassengerValidationFactory.CreatePassengerValidatable(model);
            validationObject.ValidationModel = model;
            validationObject.Validate();
            var createPassenger = new CreatePassenger()
            {
                Name = model.Name,
                Surname = model.Surname,
                DocumentNo = model.DocumentNo,
                DocumentType = model.DocumentType,
                Gender = (int)model.Gender,
                IssueDate = model.IssueDate,
            };
            return await _passengerService.CreatePassenger(createPassenger);
        }
    }
}
