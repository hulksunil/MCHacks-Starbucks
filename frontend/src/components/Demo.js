import React, { useRef } from 'react'
import './Demo.css'

const Demo = () => {
    const videoRef = useRef(null)
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
    }


    return (
        <div className='demo'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1>Live feed</h1>
                        <h1><span className='primary-color'>Weapon detection</span></h1>
                        <p>Our application can detect weapons from live camera feed.</p>
                    </div>
                    <div className='col-2'>
                        <div className='form-layout'>
                            <div className='form-container'>
                                <p className='video-txt'>Video</p>
                                <video ref={videoRef}></video>
                                <button onClick={getVideo}>Start camera</button>
                            </div>
                            <div className='form-footer'>
                                <p>
                                    Weapon(s) detected
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo