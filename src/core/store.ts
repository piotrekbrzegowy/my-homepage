import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import themeSlice from "../common/themeSlice";
import saga from './saga';
import personalHomepageSlice from "../features/homepage/personalHomepageSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeSlice,
        personalHomepage:  personalHomepageSlice
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(saga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;