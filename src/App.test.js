import React from 'react';
import App from './App';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

describe('<App />', () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    test('renders header and categories', () => {
        act(() => {
            render(<App/>, container);
        });
        expect(container.getElementsByClassName('App')[0]).toBeInTheDocument();
    });

});