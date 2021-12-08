import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { NoteRoutingModule } from './note-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { noteFeatureKey, reducer } from 'src/app/core/store/reducer/note.reducer';
import { AutoFocusModule } from 'src/app/shared/directives/auto-focus/auto-focus.module';

@NgModule({
  imports: [
    CommonModule,
    NoteRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    AutoFocusModule,
    StoreModule.forFeature(noteFeatureKey, reducer),
  ],
  declarations: [NoteComponent],
  exports: [NoteComponent]
})
export class NoteModule { }
