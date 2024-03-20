using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace _13789_movie_app_backend.DAL.Models
{
    public class Genre
    {
        public int ID { get; set; }
        private string _name;
        [Required(ErrorMessage = "Name is required")]
        public string Name
        {
            get => _name;
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Name cannot be null or empty.");
                }

                _name = value;
            }
        }
    }
}
