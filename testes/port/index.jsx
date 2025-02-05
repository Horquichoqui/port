import React from 'react';

const Port = () => {
    return (
        <div>
            <h1>Portifolio</h1>
            <Aba />
        </div>

    );
};

const Aba = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://via.placeholder.com/150" alt="Imagem" style={{ marginRight: '20px' }} />
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ol>
        </div>
    );
};



export default Port;

