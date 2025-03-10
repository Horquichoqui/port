import React, { useState } from 'react';
import { Angry } from 'lucide-react';
import { Accessibility } from 'lucide-react';

function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calcula a intensidade do roxo baseado na posi��o do scroll
    const purpleIntensity = Math.min(100 + scrollPosition * 0.2, 255);
    const backgroundColor = `linear-gradient(180deg, rgba(147, 112, 219, ${purpleIntensity / 255}), rgba(75, 0, 130, ${purpleIntensity / 255}))`;

    return (
        <div style={{ 
            background: backgroundColor,
            minHeight: '100vh',
            padding: '20px',
            transition: 'background 0.3s ease'
        }}>
            {/* <h1>Convite Ousado</h1> */}
            {/* <h3>Butico hoje?</h3> */}
            <Contador />
        </div>
    );
}

const buttonStyle = {
    backgroundColor: '#dc2626', // Cor vermelha
    color: 'white',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    position: 'absolute', 
};

const successButtonStyle = {
    backgroundColor: '#16a34a',
    color: 'white',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
};

function Contador() {
    const [number, addNumber] = useState(1);
    const [position, setPosition] = useState({}); 

    function sumNumber(number) {
        addNumber(number + 1);
    }

    const getRandomPosition = () => {
        const maxTop = window.innerHeight - 50; 
        const maxLeft = window.innerWidth - 100;
        const randomTop = Math.floor(Math.random() * maxTop); 
        const randomLeft = Math.floor(Math.random() * maxLeft); 
        return { top: `${randomTop}px`, left: `${randomLeft}px` };
    };

    return (
        <div className='flex justify-center'>
            <button
                style={successButtonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#15803d')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#16a34a')}
                onClick={() => window.location.href = "https://www.youtube.com/watch?v=JMswHAJaCPw"}>
                <Accessibility size={20} /> Sim!
            </button>

            <button
                style={{ ...buttonStyle, top: position.top, left: position.left }} 
                onMouseOver={() => {
                    setPosition(getRandomPosition()); 
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#dc2626'; 
                }}
            >
                <Angry size={20} /> Nop, sem butico hoje
            </button>
        </div>
    );
}

export default Home;
