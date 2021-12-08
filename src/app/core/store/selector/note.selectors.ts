import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Note } from '../../models/note';
import * as fromNote from '../reducer/note.reducer';

export const selectNoteState = createFeatureSelector<fromNote.NoteState>(
  fromNote.noteFeatureKey,
)

export const selectNotes = createSelector(
  selectNoteState,
  (state: fromNote.NoteState) => state.notes
)

export const getSelectedNoteId = createSelector(
  selectNoteState,
  (state: fromNote.NoteState) => state?.selectedNoteId || null
)

export const getSelectedNote = createSelector(
  selectNotes,
  getSelectedNoteId,
  (notes: Note[], selectedNoteId: number | null) => selectedNoteId ? notes.find(note => note.id === selectedNoteId) : null
)
