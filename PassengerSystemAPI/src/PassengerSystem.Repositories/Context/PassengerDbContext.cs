using CheckInSystem.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PassengerSystem.Repositories.Context
{
    public class PassengerDbContext : DbContext
    {
        public PassengerDbContext(DbContextOptions options) : base(options)
        {

        }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Passenger> Passengers { get; set; }

       
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Passenger>().HasKey(p => p.Id);
            modelBuilder.Entity<User>().HasKey(p => p.Id);
            base.OnModelCreating(modelBuilder);
        }
    }
}
