import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comment, getComments, Issue } from 'api/githubAPI';

import { AppThunk } from 'app/store';

interface CommentsState {
  commentsByIssue: Record<number, Comment[] | undefined>;
  loading: boolean;
  error: string | null;
}

interface CommentLoaded {
  issueId: number;
  comments: Comment[];
}

const initialState: CommentsState = {
  commentsByIssue: {},
  loading: false,
  error: null,
};

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsStart(state) {
      state.loading = true;
    },
    getCommentsSuccess(state, { payload }: PayloadAction<CommentLoaded>) {
      state.loading = false;
      state.error = null;
      state.commentsByIssue[payload.issueId] = payload.comments;
    },
    getCommentsFailure(state, { payload }: PayloadAction<string>) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  getCommentsStart,
  getCommentsSuccess,
  getCommentsFailure,
} = comments.actions;

export default comments.reducer;

export const fetchComments = (issue: Issue): AppThunk => async (dispatch) => {
  try {
    dispatch(getCommentsStart());
    const comments = await getComments(issue.comments_url);
    dispatch(getCommentsSuccess({ issueId: issue.number, comments }));
  } catch (err) {
    dispatch(getCommentsFailure(err.toString()));
  }
};
