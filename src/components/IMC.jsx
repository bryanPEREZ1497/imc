import React, { useEffect, useRef, useState } from 'react'

const Result = ({ imc }) => {
    const [colorFont, setColorFont] = useState('green')

    const colors = {
        green: 'green',
        yellow: 'yellow',
        red: 'red',
        orange: 'orange'
    }

    if (imc < 18.5) {
        // setColorFont('green')
        return (
            <div
                style={{
                    color: colors.green,
                }}
            >
                Promedio
                {imc}
            </div>
        )
    } else if (imc >= 18.5 && imc <= 24.9) {
        // setColorFont('yellow')

        return (
            <div
                style={{
                    color: colors.yellow,
                }}>
                Normal
                {imc}

            </div>
        )
    } else if (imc >= 25 && imc <= 29.9) {
        // setColorFont('orange')

        return (
            <div
                style={{
                    color: colors.orange,
                }}>
                Sobrepeso
                {imc}

            </div>
        )
    } else if (imc >= 30 && imc <= 34.9) {
        // setColorFont('red')
        return (
            <div
                style={{
                    color: colors.red,
                }}>
                Obesidad grado 1
                {imc}

            </div>
        )
    } else if (imc >= 35 && imc <= 39.9) {
        // setColorFont('red')
        return (
            <div
                style={{
                    color: colors.red,
                }}>
                Obesidad grado 2
                {imc}

            </div>
        )
    } else if (imc >= 40) {
        // setColorFont('red')
        return (
            <div
                style={{
                    color: colors.red,
                    colorFont
                }}>
                Obesidad grado 3
                {imc}

            </div>
        )
    }
}

const IMC = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [imc, setImc] = useState(0)

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'weight') {
            setWeight(value)
        } else {
            setHeight(value)
        }
        calculateImc()

    }

    const calculateImc = () => {
        const total = weight / (height / 100) ** 2
        setImc(total)
    }

    return (
        <div style={{
            marginTop: '20px',
            weight: '100px',
            height: '100px',
            margin: '100px',
            backgroundColor: 'gray',

        }}>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',

            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>

                    <input
                        type="range"
                        name='height'
                        min="1"
                        max="200"
                        value={height}
                        step="1"
                        onChange={handleChange}
                    ></input>
                    <p>{height}m</p>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>

                    <input
                        type="range"
                        name='weight'
                        min="1"
                        max="200"
                        value={weight}
                        step="1"
                        onChange={handleChange}
                    ></input>
                    <p>{weight}kg</p>
                </div>

            </div>
            <Result imc={imc} />
        </div>

    );
}

export default IMC