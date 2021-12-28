using PassengerSystem.Repositories.Context;

namespace PassengerSystem.Repositories
{
    public class Repository 
    {
        private readonly PassengerDbContext _context;
        public Repository(PassengerDbContext context)
        {
            _context = context;
        }

        public async Task<T> AddAsync<T>(T entity) where  T : class
        {
            return entity;
        }
        public async Task<T> AddRange<T>(T entity) where T : class
        {
            return entity;
        }
        public async Task<T> UpdateAsync<T>(T entity) where T : class
        {
            return entity;
        }
        public async Task DeleteAsync<T>(T entity) where T : class
        {

        }
    }
}
