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
        <div
            className='w3-container w3-padding-24 w3-auto'
            style={{ backgroundColor: uniformStyle.color.primaryBackgroundColor }}
        >
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            {/* this form does not have any function other than relaying right now */}
            <form action={slugs.categories} method='post'>
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
                        <input type='checkbox' defaultChecked='checked' name='remember' /> Remember
                        me
                    </label>
                </div>
                <div
                    className='container'
                    style={{
                        marginBottom: '10px',
                        textAlign: 'right',
                        backgroundColor: '#f1f1f1'
                    }}
                >
                    <a href={slugs.forgotPassword}>Forgot password?</a>
                </div>
            </form>
        </div>
    );
}

export default LoginComponent;
