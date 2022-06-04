import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { IRepository } from "./personalHomepageAPI";

type Status = "initial" | "loading" | "success" | "error";

interface IPersonalHomepageSlice {
    status: Status;
    repositories: IRepository[] | null;
}

const initialState: IPersonalHomepageSlice = {
    status: "initial",
    repositories: null
}

const personalHomepageSlice = createSlice({
    name: "personalHomepage",
    initialState,
    reducers: {
        fetchRepositoriesLoading: (): IPersonalHomepageSlice => ({
            status: "loading",
            repositories: null
        }),
        fetchRepositoriesSuccess: (_, { payload: repositories }): IPersonalHomepageSlice => ({
            status: "success",
            repositories
        }),
        fetchRepositoriesError: (): IPersonalHomepageSlice => ({
            status: "error",
            repositories: null
        })
    }
})

export const { fetchRepositoriesLoading, fetchRepositoriesSuccess, fetchRepositoriesError } = personalHomepageSlice.actions;

export const selectRepositories = (state: RootState) => state.personalHomepage.repositories

export default personalHomepageSlice.reducer;
