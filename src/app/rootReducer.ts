import { combineReducers } from '@reduxjs/toolkit';
import issuesDisplayReducer from 'features/issuesDisplay/issuesDisplaySlice';
import issuesReducer from 'features/issuesList/issuesSlice';
import repoDetailsReducer from 'features/repoSearch/repoDetailsSlice';

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer,
  issues: issuesReducer,
  repoDetails: repoDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
