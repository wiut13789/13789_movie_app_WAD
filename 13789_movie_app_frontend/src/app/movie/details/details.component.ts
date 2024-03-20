import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { Genre, Movie } from '../../Types';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  detailsGenre: Movie = {
    id: 0,
    title: '',
    description: '',
    genreID: 0,
    genre: {
      id: 0,
      name: '',
    },
  };
  APIservice = inject(APIService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.APIservice.getMovieByID(
      this.activatedRoute.snapshot.params['id']
    ).subscribe((resultedItem) => {
      this.detailsGenre = resultedItem;
    });
  }
}
