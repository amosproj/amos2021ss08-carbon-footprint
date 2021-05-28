import './Loginstyle.css';
import { useContext } from 'react';
import CarbonFootprintLogo from 'assets/logo/LogoCarbonteam.png';
import { uniformStyle, color } from 'resources/theme';
import slugs from 'resources/slugs';
import { GlobalContext } from 'hooks/GlobalContext';
import React from 'react';

/**
 * The LoginComponent realizes the Login Page.
 *
 * @author Mani Anand, Martin Wagner
 */
function LoginComponent() {
    const [, setState] = useContext(GlobalContext);

    return (
        <div
            className='flex-container'
            style={{ backgroundColor: uniformStyle.color.secondaryBackgroundColor }}
        >
            <div className='w3-padding-24 w3-auto'>
                <meta
                    style={{ height: '100%' }}
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                {/* this form does not have any function other than relaying right now */}
                <form
                    className='login'
                    action={slugs.categories}
                    onSubmit={() => setState({ userIsLoggedIn: true })}
                    style={{
                        backgroundColor: uniformStyle.color.primaryBackgroundColor,
                        borderColor: uniformStyle.color.accentColor
                    }}
                >
                    <div className='imgcontainer'>
                        <img src={CarbonFootprintLogo} alt='Carbon Footprint' className='avatar' />
                    </div>
                    <div className='login-container'>
                        <label htmlFor='uname'>
                            <b>Username</b>
                        </label>
                        <input
                            className='login'
                            type='text'
                            placeholder='Enter Username'
                            name='uname'
                            required
                        />
                        <label htmlFor='psw'>
                            <b>Password</b>
                        </label>
                        <input
                            className='login'
                            type='password'
                            placeholder='Enter Password'
                            name='psw'
                            required
                        />
                        <button
                            className='login'
                            style={{ backgroundColor: uniformStyle.color.accentColor }}
                            type='submit'
                        >
                            Login
                        </button>
                        <label>
                            <input type='checkbox' defaultChecked='checked' name='remember' />{' '}
                            Remember me
                        </label>
                        <div
                            className='login-container'
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                                textAlign: 'right',
                                backgroundColor: color.lightGray
                            }}
                        >
                            <a href={slugs.forgotPassword}>Forgot password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;
