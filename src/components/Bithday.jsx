import React, { useState } from 'react'
import '../styles/Bithday.css'
import TimeValue from './TimeValue'


const Bithday = () => {
    const [birthday, setBirthday] = useState('')
    const [months, setMonths] = useState(0)
    const [days, setDays] = useState(0)
    const [years, setYears] = useState(0)

    const handleBirthday = (e) => {
        setBirthday(e.target.value)
    }

    const calcuteTime = () => {
        if (birthday === '') {
            alert('Please enter your birthday')
            return
        }

        let today = new Date()
        let birthDate = new Date(birthday)
        let months = today.getMonth() - birthDate.getMonth()
        console.log(today.getDate())
        console.log(birthDate.getDate())
        let days = today.getDate() - birthDate.getDate()
        let years = today.getFullYear() - birthDate.getFullYear()

        if (months < 0) {
            years--
            months = 12 + months
        }
        if (days < 0) {
            days = 30 + days
            months--
        }

        setMonths(months)
        setDays(days)
        setYears(years)
    }

    return (
        <div className="bithday-container">
            <div className='container'>
                <input
                    className='date-input'
                    type="date"
                    value={birthday}
                    onChange={handleBirthday}
                />

                <button
                    className='btn'
                    type="button"
                    onClick={calcuteTime}>Calculate</button>
            </div>

            <div className='result-container'>
                <TimeValue type={'Years'} value={years} />
                <TimeValue type={'Months'} value={months} />
                <TimeValue type={'Days'} value={days} />
            </div>

        </div>
    )
}



export default Bithday