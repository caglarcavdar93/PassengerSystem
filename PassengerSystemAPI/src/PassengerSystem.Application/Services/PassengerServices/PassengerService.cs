using CheckInSystem.Domain.Entities;
using PassengerSystem.Application.Services.PassengerServices.Dto;
using PassengerSystem.Domain.Abstractions;

namespace PassengerSystem.Application.Services.PassengerServices
{
    public class PassengerService : IPassengerService
    {
        private readonly IRepository _repository;
        public PassengerService(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<Passenger> CreatePassenger(CreatePassenger entity)
        {
            var pessenger = Passenger.Create(entity.Name, entity.Surname, entity.Gender, entity.DocumentNo, entity.DocumentType);
            return await _repository.AddAsync(pessenger);
        }
        public async Task<Passenger> UpdatePassenger(UpdatePassenger entity)
        {
            var updatePassenger = _repository.GetFirst<Passenger>(x => x.Id == entity.Id);
            updatePassenger.Name = entity.Name;
            updatePassenger.Surname = entity.Surname;
            updatePassenger.DocumentType = entity.DocumentType;
            updatePassenger.IssueDate = entity.IssueDate;
            updatePassenger.DocumentNo = entity.DocumentNo;
            updatePassenger.Gender = entity.Gender;
            return await _repository.UpdateAsync(updatePassenger);
        }
        public async Task DeletePessenger (DeletePassenger entity)
        {
            var deletePassenger = _repository.GetFirst<Passenger>(x => x.Id == entity.Id);
            await _repository.DeleteAsync(deletePassenger);
        }
        public async Task<List<Passenger>> GetAllPassengers()
        {
            return await _repository.GetAll<Passenger>();
        }
        public Passenger GetPassengerById(string id)
        {
            return _repository.GetFirst<Passenger>(x => x.Id == id);
        }
    }
}
