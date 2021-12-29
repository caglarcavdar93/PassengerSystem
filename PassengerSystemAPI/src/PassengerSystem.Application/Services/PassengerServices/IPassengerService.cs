using CheckInSystem.Domain.Entities;
using PassengerSystem.Application.Services.PassengerServices.Dto;

namespace PassengerSystem.Application.Services.PassengerServices
{
    public interface IPassengerService
    {
        public Task<Passenger> CreatePassenger(CreatePassenger entity);
        public Task<Passenger> UpdatePassenger(UpdatePassenger entity);
        public Task DeletePessenger(DeletePassenger entity);
        public Task<List<Passenger>> GetAllPassengers();
        public Passenger GetPassengerById(string id);
    }
}
