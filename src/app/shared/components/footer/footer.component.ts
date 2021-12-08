import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NoteState } from 'src/app/core/store/reducer/note.reducer';
import { getSelectedNoteId } from 'src/app/core/store/selector/note.selectors';
import { Constants } from 'src/app/core/structures/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  pageNum: number;
  selectedNoteId$: Observable<number | null>;

  constructor(
    private router: Router,
    private store: Store<NoteState>
  ) { }

  ngOnInit(): void {
    this.selectedNoteId$ = this.store.select(getSelectedNoteId);
    this.selectedNoteId$.subscribe(selectedNoteId => {
      this.pageNum = selectedNoteId;
    })
  }

  onBack() {
    if (this.pageNum !== 1) {
      this.router.navigateByUrl(`/note/${this.pageNum - 1}`);
    }
  }

  onForward() {
    if (this.pageNum !== Constants.TOTAL_PAGE_COUNT) {
      this.router.navigateByUrl(`/note/${this.pageNum + 1}`);
    }
  }

}
