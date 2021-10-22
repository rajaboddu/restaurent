import React,{useState} from 'react'
import DateTimePicker from 'react-datetime-picker';

const DatePicker = () => {
    const [value, setValue] = useState(new Date())
    return (
        <div className='text-center mt-2'>
            <DateTimePicker
                value={value}
                onChange={ setValue}/>
        </div>
    )
}

export default DatePicker
