import React from 'react';
import MydashboardItemComponent from './MydashboardItemComponent';
import { Row } from 'react-grid-system';

function DashboardComponent() {
    return (
        <>
            <div className='DashboardBody'>
                <MydashboardItemComponent />
            </div>
            <div className='DashboardFooter'>
                <Row style={{ padding: 0, margin: 0 }} breakpoints={{ 1024: 'column' }}>
                    <div className='ContactContainer'>
                        <footer className='w3-center w3-padding-16'>
                            <p>For latest Updates</p>
                            <form className='form-inline w3-padding-16'>
                                {'Subscribe: '}
                                <input
                                    type='email'
                                    className='form-control'
                                    size={50}
                                    placeholder='Email Address'
                                />
                                <button type='button' className='SignUp'>
                                    Sign Up
                                </button>
                            </form>

                            <p>
                                Powered by{' '}
                                <a
                                    href='https://www.siemens-energy.com/global/en/offerings.html'
                                    rel='noreferrer'
                                    title='W3.CSS'
                                    target='_blank'
                                    className='w3-hover-text-green'
                                >
                                    Siemens Energy
                                </a>
                            </p>
                        </footer>
                    </div>
                </Row>
            </div>
        </>
    );
}

export default DashboardComponent;
