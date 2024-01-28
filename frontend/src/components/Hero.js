import React from 'react'
import { FaDatabase, FaAsterisk, FaAccusoft } from 'react-icons/fa'
import './Hero.css'
import MapContainer from './MapContainer'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1><span className='primary-color'>VigiLens</span></h1>
                        <h2 style={{color:'grey'}}>Empowering Safety, One Watchful Eye at a Time.</h2>
                        <p>Introducing VigiLens - our state-of-the-art vigilance camera product! With lightning-fast real-time weapon detection capabilities, it acts as your silent guardian, instantly alerting the nearest police station at the first sign of danger. Stay protected and enjoy peace of mind knowing that our innovative technology is always on the lookout for your safety.</p>
                    </div>
                    <div className='col-2'>
                        <div className='form-layout'>
                            <div className='form-container'>
                                <p className='sign-in-txt'>Log in</p>
                                <form action=''>
                                    <input type='text' placeholder='Email' />
                                    <input type='text' placeholder='Password' />
                                    <button>Sign in</button>
                                </form>
                                <div className='divider'>
                                    <p><span>Or</span></p>
                                </div>
                                <form action=''>
                                    <button>Create an account</button>
                                </form>
                            </div>

                            <div className='form-footer'>
                                <p>
                                    By signing up, you agree to our
                                    <span className='primary-color'> Terms, Data Policy</span>
                                     and <span className='primary-color'> Cookies Policy</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <MapContainer/>
                </div>
            </div>

        </div>
    )
}

export default Hero