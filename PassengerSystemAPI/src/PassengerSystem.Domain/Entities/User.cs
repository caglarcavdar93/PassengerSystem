namespace CheckInSystem.Domain.Entities
{
    public class User
    {
        public string Id { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        private User()
        {

        }
        public static User Create(string fullName,string password, string email)
        {
            return new User()
            {
                Id = Guid.NewGuid().ToString(),
                FullName = fullName,
                Password = password,
                Email = email
            };
        }
    }
}
