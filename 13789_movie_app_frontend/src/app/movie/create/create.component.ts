import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { APIService } from '../../api.service';
import { Movie, Genre } from '../../Types';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  ApiService = inject(APIService);

  router = inject(Router);

  cate: Genre[] = [];

  cID: number = 0;

  createMovie: Movie = {
    title: '',
    description: '',
    genreID: 0,
  };

  ngOnInit() {
    this.ApiService.getAllGenres().subscribe((result) => {
      console.log(result);

      this.cate = result;
    });
  }
  create() {
    this.createMovie.genreID = this.cID;
    this.ApiService.createMovie(this.createMovie).subscribe((result) => {
      alert('Item Saved');
      this.router.navigateByUrl('movies');
    });
  }
}
