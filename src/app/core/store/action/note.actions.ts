import { createAction } from '@ngrx/store';
import { Note } from '../../models/note';

export const updateNote = createAction(
  '[Note] update Note',
  (note: Note) => ({note})
)

export const updateNoteId = createAction(
  '[Note] update Note Id',
  (noteId: number) => ({noteId})
)
