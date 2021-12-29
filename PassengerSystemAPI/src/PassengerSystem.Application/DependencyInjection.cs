using Microsoft.Extensions.DependencyInjection;
using PassengerSystem.Application.Services.PassengerServices;
using PassengerSystem.Application.Services.UserServices;
using PassengerSystem.Application.UseCases.PassengerUseCases;
using PassengerSystem.Domain.Abstractions;

namespace PassengerSystem.Application
{
    public static class DependencyInjection
    {
        public static void AddApplication(this IServiceCollection services)
        {
            services.AddTransient<IPassengerService, PassengerService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<ICreatePassengerUseCase, CreatePassengerUseCase>();
        }
    }
}
