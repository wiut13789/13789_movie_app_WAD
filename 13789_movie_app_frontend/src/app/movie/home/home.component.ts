import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { APIService } from '../../api.service';
import { Genre, Movie } from '../../Types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  ApiService = inject(APIService);
  router = inject(Router);
  items: Movie[] = [];

  ngOnInit() {
    this.ApiService.getAllMovies().subscribe((result) => {
      this.items = result;
    });
  }

  displayedColumns: string[] = [
    'ID',
    'Title',
    'Description',
    'Genre Name',
    'Actions',
  ];

  EditClicked(itemID: number) {
    this.router.navigateByUrl('movie/edit/' + itemID);
  }
  DetailsClicked(itemID: number) {
    this.router.navigateByUrl('movie/details/' + itemID);
  }
  DeleteClicked(itemID: number) {
    this.router.navigateByUrl('movie/delete/' + itemID);
  }
}
