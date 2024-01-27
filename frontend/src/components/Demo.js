import React, { useRef, useState } from 'react'
import './Demo.css'

const Demo = () => {
    const videoRef = useRef(null)
    const photoRef = useRef(null)

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                optional: [{ maxWidth: 400 }],
            }
        })
            .then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
    }

    const takePhoto = () => {
        const width = 400;
        const height = 400 / (16 / 9);

        let video = videoRef.current;
        let photo = photoRef.current;
        photo.width = width;
        photo.height = height;

        let context = photo.getContext('2d');
        context.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);
    }

    const clearPhoto = () => {
        let photo = photoRef.current;
        let context = photoRef.getContext('2d');
        context.drawImage(0, 0, photo.width, photo.height);
        setHasPhoto(false);
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
                                <div className='divider'>
                                    <p><span>Or</span></p>
                                </div>
                                <div>
                                    <canvas ref={photoRef}></canvas>
                                    {hasPhoto
                                        ? <button onClick={clearPhoto}>Clear</button>
                                        : <button onClick={takePhoto}>Take a photo</button>}
                                </div>
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