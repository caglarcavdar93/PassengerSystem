using CheckInSystem.Domain.Entities;
using PassengerSystem.Application.Services.PassengerServices;
using PassengerSystem.Application.Services.PassengerServices.Dto;
using PassengerSystem.Application.UseCases.PassengerUseCases.PassengerUseCaseModels;
using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Domain.ValueObjects;

namespace PassengerSystem.Application.UseCases.PassengerUseCases
{
    public class UpdatePassengerUseCase : IUpdatePassengerUseCase
    {
        private readonly IPassengerService _passengerService;
        public UpdatePassengerUseCase(IPassengerService passengerService)
        {
            _passengerService = passengerService;
        }

        public async Task<Passenger> UpdatePassenger(PassengerValidationModel model)
        {
            var validationObject = PassengerValidationFactory.CreatePassengerValidatable(model);
            validationObject.ValidationModel = model;
            validationObject.Validate();
            var updatePassenger = new UpdatePassenger()
            {
                Id = model.Id,
                Name = model.Name,
                Surname = model.Surname,
                DocumentNo = model.DocumentNo,
                DocumentType = model.DocumentType,
                Gender = model.Gender,
                IssueDate = model.IssueDate
            };
            return await _passengerService.UpdatePassenger(updatePassenger);
        }
    }
}
