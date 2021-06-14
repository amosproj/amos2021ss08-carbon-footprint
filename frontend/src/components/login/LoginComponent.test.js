import React from 'react';
//import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import LoginComponent from './LoginComponent';
import './../../../src/setupTests';
/**
 * Test What user would see
 */

describe('Test case for testing login', () => {
    let wrapper;
    test('username check', () => {
        wrapper = shallow(<LoginComponent />);
        wrapper
            .find('input[type="text"]')
            .simulate('change', { target: { name: 'Username', value: 'Admin' } });
        expect(wrapper.state('Username')).toEqual('Admin');
    });
    it('password check', () => {
        wrapper = shallow(<LoginComponent />);
        wrapper
            .find('input[type="password"]')
            .simulate('change', { target: { name: 'Password', value: 'Admin' } });
        expect(wrapper.state('Password')).toEqual('Admin');
    });
    // it('login check with right data', () => {
    //     wrapper = shallow(<LoginComponentogin />);
    //     wrapper
    //         .find('input[type="text"]')
    //         .simulate('change', { target: { name: 'username', value: 'Admin' } });
    //     wrapper
    //         .find('input[type="password"]')
    //         .simulate('change', { target: { name: 'password', value: 'Admin' } });
    //     wrapper.find('button').simulate('click');
    //     expect(wrapper.state('isLogined')).toBe(true);
    // });
    // it('login check with wrong data', () => {
    //     wrapper = shallow(<Login />);
    //     wrapper
    //         .find('input[type="text"]')
    //         .simulate('change', { target: { name: 'username', value: 'Admin' } });
    //     wrapper
    //         .find('input[type="password"]')
    //         .simulate('change', { target: { name: 'password', value: 'Admin' } });
    //     wrapper.find('button').simulate('click');
    //     expect(wrapper.state('isLogined')).toBe(false);
    // });
});
