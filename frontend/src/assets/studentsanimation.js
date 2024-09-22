import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieAnimation = () => {
    return (
        <div style={{ width: '500px', height: '500px' }}>
            <Player
                autoplay
                loop
                src="https://lottie.host/b9708031-28af-41b0-9922-105ca92914c5/IomHVLDIs8.json"
                style={{ height: '100%', width: '100%' }}
                rel="preload"
            >
            </Player>
        </div>
    );
};


export default LottieAnimation;