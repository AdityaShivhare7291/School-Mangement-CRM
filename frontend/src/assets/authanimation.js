import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const AuthAnimation = () => {
    return (
        <div style={{ width: '500px', height: '500px' }}>
            <Player
                autoplay
                loop
                src="https://lottie.host/a1894363-bbc1-4661-a1f1-6e348c93e45c/Rl9C5ryh7v.json"
                style={{ height: '100%', width: '100%' }}
            >
            </Player>
        </div>
    );
};


export default AuthAnimation;