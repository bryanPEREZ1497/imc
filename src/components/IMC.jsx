import React, { useEffect, useRef, useState } from 'react'

const Result = ({ imc }) => {

    if (imc < 18.5) {
        return (
            <div>
                Promedio
            </div>
        )
    } else if (imc >= 18.5 && imc <= 24.9) {
        return (
            <div>
                Normal
            </div>
        )
    } else if (imc >= 25 && imc <= 29.9) {
        return (
            <div>
                Sobrepeso
            </div>
        )
    } else if (imc >= 30 && imc <= 34.9) {
        return (
            <div>
                Obesidad grado 1
            </div>
        )
    } else if (imc >= 35 && imc <= 39.9) {
        return (
            <div>
                Obesidad grado 2
            </div>
        )
    } else if (imc >= 40) {
        return (
            <div>
                Obesidad grado 3
            </div>
        )
    }
}

const IMC = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [imc, setImc] = useState(0)


    useEffect(() => {
        calculateImc()
    }, [weight, height])

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'weight') {
            setWeight(value)
        } else {
            setHeight(value)
        }
        console.log(e.target.value)

    }

    const calculateImc = () => {
        const imc = weight / (height)**2
        setImc(imc)
        console.log(imc, 'imc')
    }

    return (
        <div>
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
            <Result imc={imc} />

        </div>

    );
}

export default IMC