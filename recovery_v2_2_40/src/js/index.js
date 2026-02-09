import { createRoot } from "react-dom/client";
import React from 'react';
import App from './App'
import { Provider } from "react-redux";
import { store } from "./app/store";





// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
                <App />
        </Provider>
);