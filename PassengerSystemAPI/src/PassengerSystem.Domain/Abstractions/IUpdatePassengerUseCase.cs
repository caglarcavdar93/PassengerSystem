using CheckInSystem.Domain.Entities;
using PassengerSystem.Domain.ValueObjects;

namespace PassengerSystem.Domain.Abstractions
{
    public interface IUpdatePassengerUseCase
    {
        public Task<Passenger> UpdatePassenger(PassengerValidationModel model);
    }
}
