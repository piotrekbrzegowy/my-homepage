import { all } from '@redux-saga/core/effects';
import { watchFetchRepositories } from '../features/homepage/personalHomepageSaga';

export default function* rootSaga() {
  yield all([watchFetchRepositories()]);
}