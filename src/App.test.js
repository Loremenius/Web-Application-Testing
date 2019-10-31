import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from "./Components/Dashboard";
import Display from "./Components/Display";
import {render} from "@testing-library/react";

it('renders without crashing', () => {
  render(<App />);
});
it('renders without crashing', () => {
  render(<Dashboard />);
});
it('renders without crashing', () => {
  render(<Display />);
});
