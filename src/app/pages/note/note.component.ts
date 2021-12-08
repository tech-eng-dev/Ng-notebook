import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/app/core/store/reducer/note.reducer';
import { updateNote, updateNoteId } from 'src/app/core/store/action/note.actions';
import { Note } from 'src/app/core/models/note';
import { getSelectedNote } from 'src/app/core/store/selector/note.selectors';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnDestroy {

  noteForm: FormGroup;
  content = new FormControl('', []);
  noteId: number;

  private destroySub = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private store: Store<NoteState>
  ) {
  }

  ngOnInit() {
    this.createForm();
    this.store.select(getSelectedNote)
      .subscribe((note: Note) => {
        this.initNote(note?.content);
      });
    this.activatedRoute.paramMap.pipe(
      takeUntil(this.destroySub)
    ).subscribe((paramMap: ParamMap) => {
      this.noteId = Number(paramMap.get('id'));
      this.store.dispatch(updateNoteId(this.noteId));
    });
  }

  ngOnDestroy(): void {
    this.destroySub.next();
    this.destroySub.complete();
  }

  onNoteChange(event: Event) {
    this.updateNote({
      id: this.noteId,
      content: (event.target as HTMLInputElement).value
    });
  }

  private createForm() {
    this.noteForm = this.fb.group({
      content: ['']
    });
  }

  private initNote(content: string) {
    this.noteForm.patchValue({
      content
    });
  }

  private updateNote(note: Note): void {
    this.store.dispatch(updateNote(note));
  }

}
