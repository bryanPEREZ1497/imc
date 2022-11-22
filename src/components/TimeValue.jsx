import '../styles/Bithday.css'

const TimeValue = ({ value, type }) => {
    return (
        <div className="result">
            <h1 className='value'>{value === 0 ? '-' : value}</h1>
            <h1 className='subtitle'>{type}</h1>
        </div>
    )
}

export default TimeValue