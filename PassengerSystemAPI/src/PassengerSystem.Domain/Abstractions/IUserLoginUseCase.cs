using PassengerSystem.Domain.ValueObjects;

namespace PassengerSystem.Domain.Abstractions
{
    public interface IUserLoginUseCase
    {
        public UserTokenResult AuthenticateUser(UserLoginModel loginModel);
    }
}
