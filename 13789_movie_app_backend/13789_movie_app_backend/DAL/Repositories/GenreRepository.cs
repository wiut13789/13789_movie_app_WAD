using _13789_movie_app_backend.DAL.Data;
using _13789_movie_app_backend.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace _13789_movie_app_backend.DAL.Repositories
{
    public class GenreRepository : IRepository<Genre>
    {
        private readonly GeneralDBContext _context;

        public GenreRepository(GeneralDBContext context)
        {
            _context = context;
        }

        public async Task AddAsync(Genre genre)
        {
            await _context.Genres.AddAsync(genre);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Genres.FindAsync(id);
            if (entity != null)
            {
                _context.Genres.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Genre>> GetAllAsync() => await _context.Genres.ToArrayAsync();

        public async Task<Genre> GetByIDAsync(int id) => await _context.Genres.FindAsync(id);

        public async Task UpdateAsync(Genre genre)
        {
            _context.Entry(genre).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
