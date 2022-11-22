import React from 'react'
import '../App.css'

export default ({title}) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            backgroundColor: 'gray',
            color: 'white',
            padding: '20px',
            margin: '0'
        }}>
        <h1>{title}</h1>
    </div>
)

