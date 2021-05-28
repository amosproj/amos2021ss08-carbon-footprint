import './Loginstyle.css';
import CarbonFootprintLogo from 'assets/logo/LogoCarbonteam.png';
import { uniformStyle } from 'resources/theme';
import slugs from 'resources/slugs';

/**
 * The LoginComponent realizes the Login Page.
 *
 * @author Mani Anand, Martin Wagner
 */
function LoginComponent() {
    return (
        <div className='table'>
            <div className='w3-padding-24 w3-auto'>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                {/* this form does not have any function other than relaying right now */}
                <form
                    action={slugs.categories}
                    method='post'
                    style={{ backgroundColor: uniformStyle.color.primaryBackgroundColor }}
                >
                    <div className='imgcontainer'>
                        <img src={CarbonFootprintLogo} alt='Carbon Footprint' className='avatar' />
                    </div>
                    <div className='container'>
                        <label htmlFor='uname'>
                            <b>Username</b>
                        </label>
                        <input type='text' placeholder='Enter Username' name='uname' required />
                        <label htmlFor='psw'>
                            <b>Password</b>
                        </label>
                        <input type='password' placeholder='Enter Password' name='psw' required />
                        <button type='submit'>Login</button>
                        <label>
                            <input type='checkbox' defaultChecked='checked' name='remember' />{' '}
                            Remember me
                        </label>
                        <div
                            className='container'
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                                textAlign: 'right',
                                backgroundColor: '#f1f1f1'
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
