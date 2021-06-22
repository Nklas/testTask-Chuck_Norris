import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

configure({adapter: new Adapter()});

describe('<Header />', () => {
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
            render(<Header/>, container);
        });
        expect(container.querySelector('h2').textContent).toBe('Chuck Norris');
    })
});