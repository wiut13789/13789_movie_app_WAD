using _13789_movie_app_backend.DAL.Data;
using _13789_movie_app_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace _13789_movie_app_backend.Repositories
{
    public class MovieRepository : IRepository<Movie>
    {
        private readonly GeneralDBContext _context;

        public MovieRepository(GeneralDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Movie>> GetAllAsync() => await _context.Movies.Include(t => t.Genre).ToArrayAsync();

        public async Task<Movie> GetByIDAsync(int id)
        {
            return await _context.Movies.Include(t => t.Genre).FirstOrDefaultAsync(t => t.ID == id);
        }

        public async Task AddAsync(Movie movie)
        {
            movie.Genre = await _context.Genres.FindAsync(movie.GenreID.Value);

            await _context.Movies.AddAsync(movie);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Movie movie)
        {
            _context.Entry(movie).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie != null)
            {
                _context.Movies.Remove(movie);
                await _context.SaveChangesAsync();
            }
        }
    }
}
