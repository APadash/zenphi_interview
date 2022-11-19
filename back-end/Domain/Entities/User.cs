namespace Domain.Entities
{
    public partial class User : BaseEntity<int>
    {
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
