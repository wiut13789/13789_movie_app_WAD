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

  createGenre: Genre = {
    id: 0,
    name: '',
  };

  create() {
    this.ApiService.createGenre(this.createGenre).subscribe((result) => {
      alert('Item Saved');
      this.router.navigateByUrl('genres');
    });
  }
}
