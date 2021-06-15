/** Setting up registration/signup page
 * @author Mani Anand
 * */

import React from 'react';
import { useForm } from 'react-hook-form';

export default function Registration() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    require('log-timestamp')('#INFO');
    console.log('Registration call');
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '450px'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        padding: '0px 0px 0px 20px',
                        position: 'static',
                        width: '198px',
                        height: '24px',
                        left: '25px',
                        top: '7px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        margin: '0px 70px',
                        gap: '14px'
                    }}
                >
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact</div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        padding: '0px 0px 0px 20px',
                        position: 'static',
                        width: '400px',
                        height: '28px',
                        right: '50px',
                        top: '5px',
                        flex: 'none',
                        order: 2,
                        flexGrow: 0,
                        margin: '0px 70px',
                        gap: '14px'
                    }}
                >
                    <div>Already have an account ? </div>
                    <div>Login</div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        margin: '250px',
                        blockSize: '12px'
                    }}
                >
                    <select {...register('Title', { required: true })} style={{ width: '100px' }}>
                        <option value='Mr'>Mr</option>
                        <option value='Mrs'>Mrs</option>
                        <option value='Miss'>Miss</option>
                        <option value='Dr'>Dr</option>
                    </select>
                    <input
                        type='text'
                        placeholder='First name'
                        {...register('First name', { required: true, maxLength: 100 })}
                    />
                    <input
                        type='text'
                        placeholder='Last name'
                        {...register('Last name', { required: true, maxLength: 100 })}
                    />
                    <input
                        type='text'
                        placeholder='Email'
                        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <input
                        type='text'
                        placeholder='Password'
                        {...register('Password', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <input
                        type='text'
                        placeholder='Enter the password again'
                        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <input type='Submit' placeholder='Create my account' />
                </div>
            </form>
        </div>
    );
}
