using System.ComponentModel.DataAnnotations;

namespace PassengerSystem.Domain.ValueObjects
{
    public class UserLoginModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
