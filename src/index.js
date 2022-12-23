import React, {} from "react";
import ReactDom from 'react-dom'
import './index.css'

import App from './App'
import { BrowserRouter } from "react-router-dom";
import {StateProvider} from "../src/context/StateProvider"
import {initialState} from "../src/context/initialState"
import reducer from "./context/reducer";

ReactDom.render(
    <BrowserRouter>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
       </StateProvider>
    </BrowserRouter>, 
document.getElementById('root')
);