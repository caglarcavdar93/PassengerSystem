using Microsoft.EntityFrameworkCore;
using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Repositories.Context;

namespace PassengerSystem.Repositories
{
    public class Repository : IRepository
    {
        private readonly PassengerDbContext _context;
        public Repository(PassengerDbContext context)
        {
            _context = context;
            
        }
        public async Task<List<T>> GetList<T>(Func<T,bool> condition) where T : class
        {
            return await _context.Set<T>().Where(condition).AsQueryable().ToListAsync();
        }
        public async Task<T> GetFirst<T>(Func<T, bool> condition) where T : class
        {
            return await _context.Set<T>().Where(condition).AsQueryable().FirstOrDefaultAsync();
        }
        public async Task<T> AddAsync<T>(T entity) where T : class
        {
            await _context.Set<T>().AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
        public async Task<T> AddRange<T>(T entity) where T : class
        {
            await _context.Set<T>().AddRangeAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
        public async Task<T> UpdateAsync<T>(T entity) where T : class
        {
            _context.Set<T>().Update(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
        public async Task DeleteAsync<T>(T entity) where T : class
        {
            _context.Set<T>().Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<List<T>> GetAll<T>() where T : class
        {
            return await _context.Set<T>().ToListAsync();
        }
    }
}
