import React from 'react';
import LoginComponent from './LoginComponent';
//import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import './../../../src/setupTests';
import { mount } from 'enzyme';
import { GlobalStateProvider } from './../../hooks/GlobalContext';
/**
 * Test What user would see
 */

test('Login Page', () => {
    const wrapper = mount(<LoginComponent />);
    // const promise = () => {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       wrapper.update();
    //       resolve(wrapper);
    //     }, 3000);
    //   });
    // };
    //return promise().then((res: Enzyme.ReactWrapper<any>) => {
    wrapper
        .find('input[type="text"]')
        .simulate('change', { target: { name: 'uname', value: 'Admin' } });
    expect(wrapper.state('uname')).toEqual('Admin');
    //}
});
// it(">>>> should show greeting with another name", async () => {
//     const wrapper = mount(
//       <UserContext.Provide
//       value={{
//         dispatch: jest.fn(),
//         user: { firstname: "Alice", lastname: "Middleman" }
//         loading: false
//       }}>
//         <Greeting />
//       </UserContext.Provider>);
//     expect(wrapper.find("h1").text()).toEqual("Hello Alice Middleman");
//   });
// describe('LoginPage', () => {
//     it('should render the basic fields', () => {
//         render(<LoginComponent />);
//         expect(screen.getByRole('textbox', { name: /Username/i })).toBeInTheDocument();
//         expect(screen.getByRole('textbox', { name: /Password/i })).toBeInTheDocument();
//     });
// });
// test('renders the form correctly', () => {
//     const { getByText, getByLabelText } = render(<LoginComponent />);
//     const nameLabel = getByText(/uname:/i);
//     const passwordLabel = getByText(/psw:/i);
//     expect(nameLabel).toBeInTheDocument();
//     expect(passwordLabel).toBeInTheDocument();
//     const input1 = getByLabelText(/uname:/i);
//     const input2 = getByLabelText(/psw:/i);
//     expect(input1).toHaveAttribute('type', 'text');
//     expect(input2).toHaveAttribute('type', 'password');
// });
// //configure({ adapter: new Adapter() });
// // describe('Test case for testing login', () => {
// //     let wrapper;
// //     test('username check', () => {
// //         wrapper = shallow(<LoginComponent />);
// //         wrapper
// //             .find('input[type="text"]')
// //             .simulate('change', { target: { name: 'uname', value: 'Admin' } });
// //         expect(wrapper.state('uname')).toEqual('Admin');
// //     });
// //     it('password check', () => {
// //         wrapper = shallow(<LoginComponent />);
// //         wrapper
// //             .find('input[type="password"]')
// //             .simulate('change', { target: { name: 'psw', value: 'admin' } });
// //         expect(wrapper.state('psw')).toEqual('admin');
// //     });
// //     // it('login check with right data', () => {
// //     //     wrapper = shallow(<LoginComponentogin />);
// //     //     wrapper
// //     //         .find('input[type="text"]')
// //     //         .simulate('change', { target: { name: 'username', value: 'krishankantsinghal' } });
// //     //     wrapper
// //     //         .find('input[type="password"]')
// //     //         .simulate('change', { target: { name: 'password', value: 'krishankant123' } });
// //     //     wrapper.find('button').simulate('click');
// //     //     expect(wrapper.state('isLogined')).toBe(true);
// //     // });
// //     // it('login check with wrong data', () => {
// //     //     wrapper = shallow(<Login />);
// //     //     wrapper
// //     //         .find('input[type="text"]')
// //     //         .simulate('change', { target: { name: 'username', value: 'krishankantsinghal' } });
// //     //     wrapper
// //     //         .find('input[type="password"]')
// //     //         .simulate('change', { target: { name: 'password', value: 'krishankant1234' } });
// //     //     wrapper.find('button').simulate('click');
// //     //     expect(wrapper.state('isLogined')).toBe(false);
// //     // });
// //});
