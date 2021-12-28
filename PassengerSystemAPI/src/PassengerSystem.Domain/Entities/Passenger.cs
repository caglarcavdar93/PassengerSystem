namespace CheckInSystem.Domain.Entities
{
    public class Passenger
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Gender { get; set; }
        public string DocumentNo { get; set; }
        public int DocumentType { get; set; }
        public DateTime IssueDate { get; set; }
    }
}
