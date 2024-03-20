using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using _13789_movie_app_backend.DAL.Data;
using _13789_movie_app_backend.Repositories;
using _13789_movie_app_backend.Models;

namespace _13789_movie_app_backend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly IRepository<Genre> _repository;
        public GenresController(IRepository<Genre> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Genre>> Get()
        {
            return await _repository.GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID(int id)
        {
            var resultedCategory = await _repository.GetByIDAsync(id);
            if (resultedCategory == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(resultedCategory);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create(Genre categories)
        {
            await _repository.AddAsync(categories);
            return CreatedAtAction(nameof(GetByID), new { id = categories.ID }, categories);
        }

        [HttpPut]
        public async Task<IActionResult> Update(Genre categories)
        {
            //if(id!=items.ID) return BadRequest();
            await _repository.UpdateAsync(categories);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.DeleteAsync(id);
            return NoContent();
        }
    }
}
