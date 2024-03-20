import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../api.service';
import { Genre, Movie } from '../../Types';

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
  editGenre: Genre = {
    id: 0,
    name: '',
  };
  ngOnInit() {
    this.serv
      .getGenreByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((result) => {
        this.editGenre = result;
      });
  }

  toHome() {
    this.router.navigateByUrl('genres');
  }

  edit() {
    this.serv.editGenre(this.editGenre).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('genres');
    });
  }
}
