import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule, MatTableModule,
  MatToolbarModule, MatSelectModule, MatDatepickerModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSelectModule, MatDatepickerModule],
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule,
    MatTableModule, MatPaginatorModule,
    MatSortModule, MatProgressSpinnerModule, MatSelectModule, MatDatepickerModule
  ],
})
export class CustomMaterialModule {
}
