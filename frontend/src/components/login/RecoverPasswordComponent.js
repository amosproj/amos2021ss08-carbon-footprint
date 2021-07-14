import './RecoverPasswordStyle.css';
import { useContext } from 'react';
import slugs from 'resources/slugs';
import { GlobalContext } from 'hooks/GlobalContext';
import React from 'react';

function RecoverPasswordComponent() {
    const [, setState] = useContext(GlobalContext);

    return (
        <div className='flex-container-recover'>
            <div className='w3-padding-24 w3-auto'>
                <form
                    className='recover'
                    action={slugs.categories}
                    onSubmit={() => setState({ userIsLoggedIn: true })}
                >
                    <div className='w3-container w3-large w3-center'>
                        <div className='w3-center-align w3-padding-24'>
                            <h1>Forgot Your Password ?</h1>
                        </div>
                    </div>

                    <div className='recoverpassword-container'>
                        <div className='w3-center-align w3-padding-16'>
                            <p>
                                Don't fret! Just type in your email and we will send you a code to
                                reset the password
                            </p>
                        </div>
                        <label htmlFor='uname'>
                            <b>Your Email</b>
                        </label>
                        <input
                            className='recover'
                            type='text'
                            placeholder='abc@company.com'
                            name='uname'
                            required
                        />

                        <button className='recover' type='submit'>
                            Recover Password
                        </button>

                        <div className='recoverpassword-container'>
                            <a href={slugs.login}> Back to SignIn </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RecoverPasswordComponent;
