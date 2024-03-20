using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using _13789_movie_app_backend.Repositories;
using _13789_movie_app_backend.Models;

namespace _13789_movie_app_backend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IRepository<Movie> _repository;
        public MoviesController(IRepository<Movie> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Movie>> GetAll() => await _repository.GetAllAsync();


        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Movie), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetByID(int id)
        {
            var resultedToDo = await _repository.GetByIDAsync(id);
            return resultedToDo == null ? NotFound() : Ok(resultedToDo);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(Movie items)
        {
            await _repository.AddAsync(items);
            return Ok(items);
            //return CreatedAtAction(nameof(GetByID), new { id = items.ID }, items);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Movie items)
        {
            //if(id!=items.ID) return BadRequest();
            await _repository.UpdateAsync(items);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.DeleteAsync(id);
            return NoContent();
        }
    }
}
