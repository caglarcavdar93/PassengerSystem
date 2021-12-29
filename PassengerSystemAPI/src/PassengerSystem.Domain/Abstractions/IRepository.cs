namespace PassengerSystem.Domain.Abstractions
{
    public interface IRepository
    {
        public Task<T> AddAsync<T>(T entity) where T : class;
        public Task<T> AddRange<T>(T entity) where T : class;
        public Task<T> UpdateAsync<T>(T entity) where T : class;
        public Task DeleteAsync<T>(T entity) where T : class;
        public Task<T> GetFirst<T>(Func<T, bool> condition) where T : class;
        public Task<List<T>> GetList<T>(Func<T, bool> condition) where T : class;
        public Task<List<T>> GetAll<T>() where T : class;
    }
}
