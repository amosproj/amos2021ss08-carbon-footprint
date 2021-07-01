import './loginstyle.css';
import { useContext } from 'react';
import CarbonFootprintLogo from 'assets/logo/LogoCarbonteam.png';
import slugs from 'resources/slugs';
import { GlobalContext } from 'hooks/GlobalContext';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loadProjects } from 'store/actions/productAction';

/**
 * The LoginComponent realizes the Login Page.
 *
 * @author Mani Anand, Martin Wagner
 */
function LoginComponent() {
    const [, setState] = useContext(GlobalContext);

    const dispatch = useDispatch();

    return (
        <div className='flex-container'>
            <div className='w3-padding-24 w3-auto'>
                <form
                    className='login'
                    action={slugs.categories}
                    onSubmit={() => {
                        setState({ userIsLoggedIn: true });
                        /*
                         * useEffect declars the async function getProducts to be executed after the initial render and
                         * hooks it so the Component reloads on change. At the moment the specified change is the selectedCategory.
                         */
                        dispatch(loadProjects());
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
                        <button className='login' type='submit'>
                            Login
                        </button>

                        <label>
                            <input type='checkbox' defaultChecked='checked' name='remember' />{' '}
                            Remember me
                        </label>
                        <div className='login-container'>
                            <a href={slugs.forgotPassword}>Forgot password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;
