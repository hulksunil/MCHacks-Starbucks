import React from 'react'
import { FaDatabase, FaAsterisk, FaAccusoft } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1>VIGI</h1>
                        <h1><span className='primary-color'>VigiLENS redefined</span></h1>
                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                            Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
                            laboriosam eos praesentium veritatis!</p>
                        <div className='used-by'>
                            <p>USED BY</p>
                            <div className='icons'>
                                <span><FaDatabase /> Concordia</span>
                                <span><FaAsterisk /> McGill</span>
                                <span><FaAccusoft /> McHacks</span>
                            </div>
                        </div>
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
                </div>
            </div>

        </div>
    )
}

export default Hero