using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace _13789_movie_app_backend.Models
{
    public class Movie
    {
        [Required]
        public int ID { get; set; }

        [Required(ErrorMessage = "Title is required")]
        public string? Title { get; set; }

        [Required(ErrorMessage = "Description is required")]
        public string? Description { get; set; }

        // Nullable foreign key
        public int? GenreID { get; set; }

        // Navigation property
        [ForeignKey("CategoryID")]
        public Genre? Genre { get; set; }
    }
}
