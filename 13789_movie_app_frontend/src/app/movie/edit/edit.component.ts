import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../api.service';
import { Genre, Movie } from '../../Types';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  serv = inject(APIService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editMovie: Movie = {
    id: 0,
    title: '',
    description: '',
    genreID: 0,
    genre: {
      id: 0,
      name: '',
    },
  };
  genreObject: any;
  selected: any;
  cID: number = 0;
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);

    this.serv
      .getMovieByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((result) => {
        this.editMovie = result;
        console.log(this.editMovie);
        this.selected = this.editMovie.genreID;
      });

    this.serv.getAllGenres().subscribe((result) => {
      this.genreObject = result;
    });
  }

  toHome() {
    this.router.navigateByUrl('movies');
  }

  edit() {
    this.editMovie.genreID = this.cID;
    this.editMovie.genre =
      this.genreObject[findIndexByID(this.genreObject, this.cID)];
    this.serv.editMovie(this.editMovie).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('movies');
    });
  }
}
