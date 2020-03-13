import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';
import Nav from "./Nav"
import useDarkMode  from "./Hooks/useDarkMode";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

});

test("renders useDarkMode without crashing", () => {
    render(<useDarkMode />);
  }); 

  test("renders Nav without crashing", () => {
    render(<Nav/>);
  }); 

test("checking text", () => {
    const { getByText } = render(<Nav />);
    
    const h1 = getByText(/women soccer data/i);
    const button = getByText(/Set Dark or Light mode/i);
    expect(button.className).toBe("button")
     

})

test("renders App without crashing", () => {
  render(<App/>);

  const { getByText } = render(<App />);


}); 







