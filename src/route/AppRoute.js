import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';


export class AppRoute extends Component {
  render() {
    return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>} />

        </Routes>
      </BrowserRouter>
    )
  }
}

export default AppRoute
