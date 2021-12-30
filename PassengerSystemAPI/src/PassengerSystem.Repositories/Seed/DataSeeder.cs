using CheckInSystem.Domain.Entities;
using PassengerSystem.Repositories.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PassengerSystem.Repositories.Seed
{
    public class DataSeeder
    {
        private readonly PassengerDbContext _context;
        public DataSeeder(PassengerDbContext context)
        {
            _context = context;
        }

        public async Task SeedDataAsync()
        {
            try
            {
                if (!_context.Passengers.Any())
                {
                    var data = CreateSeedData();
                    _context.Passengers.AddRange(data);
                }
                if (!_context.Passengers.Any())
                {
                    _context.Users.Add(User.Create("Çağlar Çavdar", "1234", "caglarcavdar@example.com"));
                }
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
           
        }
        private List<Passenger> CreateSeedData()
        {
            var psgList = new List<Passenger>();
            for (int i = 0; i < 10; i++)
            {
                psgList.Add(Passenger.Create("Çağlar" + i, "Çavdar" + i, 5, "123456789", 1));
            }
            return psgList;
        }
    }
}
