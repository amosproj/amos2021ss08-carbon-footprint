/** Setting up login page
 * @author Mani Anand
 * @author Martin Wagner
 * */

import './Loginstyle.css';

function LoginComponent() {
    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <h2>Login Form</h2>
            <form action='/action_page.php' method='post'>
                <div className='imgcontainer'>
                    <img src='img_avatar2.png' alt='Avatar' className='avatar' />
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
                <div className='container' style={{ backgroundColor: '#f1f1f1' }}>
                    <button type='button' className='cancelbtn'>
                        Cancel
                    </button>
                    <span className='psw'>
                        Forgot <a href='#'>password?</a>
                    </span>
                </div>
            </form>
        </>
    );
}

export default LoginComponent;
