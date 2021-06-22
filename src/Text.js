import React from 'react';
import './App.css';

function Text({text}) {
    return (
        <div style={{
            zIndex: 2,
            marginBottom: 144,
            backgroundColor: "#422ED4",
            color: "white",
            height: 162,
            borderRadius: 25,
            padding: 24,
            fontSize: 20,
            fontFamily: 'Railway',
            fontWeight: 600
        }}>
            {text}
        </div>
    );
}

export default Text;
