import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, Genre } from '../../Types';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  deleteGenre: Movie = {
    id: 0,
    title: '',
    description: '',
    genreID: 0,
    genre: {
      id: 0,
      name: '',
    },
  };
  service = inject(APIService);
  activateRote = inject(ActivatedRoute);
  router = inject(Router);
  ngOnInit() {
    this.service
      .getMovieByID(this.activateRote.snapshot.params['id'])
      .subscribe((result) => {
        this.deleteGenre = result;
      });
  }
  onHomeButtonClick() {
    this.router.navigateByUrl('movies');
  }
  onDeleteButtonClick(id: number) {
    this.service.deleteMovie(id).subscribe((r) => {
      this.router.navigateByUrl('movies');
    });
  }
}
