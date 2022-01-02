using CheckInSystem.Domain.Entities;
using PassengerSystem.Application.Services.UserServices.Dto;
using PassengerSystem.Domain.Abstractions;

namespace PassengerSystem.Application.Services.UserServices
{
    public class UserService : IUserService
    {
        private readonly IRepository _repository;
        public UserService(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<User> CreateUser(CreateUser entity)
        {
            var user = User.Create(entity.FullName, entity.Password, entity.Email);
            return await _repository.AddAsync(user);
        }
        public async Task<User> UpdateUser(UpdateUser entity)
        {
            var updateUser = _repository.GetFirst<User>(x => x.Id == entity.UserId);
            updateUser.Password = entity.Password;
            updateUser.Email = entity.Email;
            updateUser.FullName = entity.FullName;
            return await _repository.UpdateAsync(updateUser);
        }
        public async Task DeleteUser(DeleteUser entity)
        {
            var deleteUser = _repository.GetFirst<User>(x => x.Id == entity.UserId);
            await _repository.DeleteAsync(deleteUser);
        }
        public async Task<List<User>> GetAllUsers()
        {
            return await _repository.GetAll<User>();
        }
        public User GetUserByEmail(string email)
        {
            return _repository.GetFirst<User>(x => x.Email == email);
        }
    }
}
