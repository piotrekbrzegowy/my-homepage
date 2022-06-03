import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories, IRepository } from "./personalHomepageAPI";
import { fetchRepositoriesError, fetchRepositoriesLoading, fetchRepositoriesSuccess } from "./personalHomepageSlice";

function* fetchRepositoriesHandler() {
    const githubAPIBaseURL = "https://api.github.com";
    const username = "piotrekbrzegowy";

    const repositoriesPath = `${githubAPIBaseURL}/users/${username}/repos?sort=created`;

    try {
        yield delay(1000) //just to show loader
        const repositories: IRepository[] = yield call(getRepositories, repositoriesPath);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export function* watchFetchRepositories() {
    yield takeLatest(fetchRepositoriesLoading.type, fetchRepositoriesHandler);
}