import React from 'react';
import ReactDOM from 'react-dom';
//import { act } from 'react-dom/test-utils';
import LoginComponent from './LoginComponent';
//import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import './../../../src/setupTests';
/**
 * Test What user would see
 */
let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render and update a counter', () => {
    // Test first render and componentDidMount
    jest.mock(LoginComponent, () => {
        const mockComponent = require(LoginComponent);
        return mockComponent(LoginComponent);
    });
});
