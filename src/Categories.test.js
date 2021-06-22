import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import Categories from './Categories';

describe('<Categories />', () => {
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
    it('should render', () => {
        act(() => {
            render(<Categories/>, container);
        });
        expect(container.querySelector('h1').textContent).toBe('Categories');
    })
});