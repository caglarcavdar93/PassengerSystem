namespace PassengerSystem.Application.Services.PassengerServices.Dto
{
    public record UpdatePassenger : CreatePassenger
    {
        public string Id { get; set; }
    }
}
