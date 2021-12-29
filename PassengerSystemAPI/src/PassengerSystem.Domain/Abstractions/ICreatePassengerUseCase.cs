using CheckInSystem.Domain.Entities;
using PassengerSystem.Domain.ValueObjects;

namespace PassengerSystem.Domain.Abstractions
{
    public interface ICreatePassengerUseCase
    {
        public Task<Passenger> CreatePassenger(PassengerValidationModel model)
    }
}
