namespace PassengerSystem.Domain.Exceptions
{
    public class FieldValidationException : Exception
    {
        public FieldValidationException(string field) : base($"Invalid field:{field}")
        {
            
        }
    }
}
