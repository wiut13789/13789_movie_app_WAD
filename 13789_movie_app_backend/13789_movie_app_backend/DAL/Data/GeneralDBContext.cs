using _13789_movie_app_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace _13789_movie_app_backend.DAL.Data
{
    public class GeneralDBContext : DbContext
    {
        public GeneralDBContext(DbContextOptions<GeneralDBContext> options) : base(options) { }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Genre> Genres { get; set; }
    }
}
