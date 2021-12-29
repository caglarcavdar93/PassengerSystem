using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Repositories.Context;

namespace PassengerSystem.Repositories
{
    public static class DependencyInjection
    {
        public static void AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            var dbName = configuration.GetSection("DbName");
            services.AddDbContext<PassengerDbContext>(opt => opt.UseInMemoryDatabase(databaseName:dbName.Value));
            services.AddScoped<IRepository, Repository>();
        }
    }
}
