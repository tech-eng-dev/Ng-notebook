import { Action, createReducer, on } from '@ngrx/store';
import { Note } from '../../models/note';
import * as NoteActions from '../action/note.actions';

export const noteFeatureKey = 'note';

export interface NoteState {
  notes: Note[];
  selectedNoteId: number | null;
}

export const initialState: NoteState = {
  notes: [],
  selectedNoteId: null
}

export const noteReducer = createReducer(
  initialState,
  on(NoteActions.updateNote, (state: NoteState, {note}) => {
    const index = state.notes.findIndex((n: Note) => n?.id === note?.id);
    if (index === -1) {
      return {...state, notes: [...state.notes, note]};
    } else {
      const notes = [...state.notes];
      notes[index] = note;
      return {...state, notes: notes}
    }
  }),
  on(NoteActions.updateNoteId, (state: NoteState, {noteId}) => ({
    ...state,
    selectedNoteId: noteId 
  }))
)

export function reducer(state: NoteState | undefined, action: Action): any {
  return noteReducer(state, action);
}
