using CheckInSystem.Domain.Entities;
using PassengerSystem.Application.Services.UserServices.Dto;

namespace PassengerSystem.Application.Services.UserServices
{
    public interface IUserService
    {
        public Task<User> CreateUser(CreateUser entity);
        public Task<User> UpdateUser(UpdateUser entity);
        public Task DeleteUser(DeleteUser entity);
        public Task<List<User>> GetAllUsers();
        public User GetUserByEmail(string email);
    }
}
