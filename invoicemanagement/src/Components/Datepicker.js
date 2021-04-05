import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import DateView from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";




const Datepicker = () => {
    const [value, setValue] = useState(new Date());

    const onChange = e => {
        setValue(e)
        console.log(e)
    }

    
    return (
        <div>
            <DateView 
        onChange={onChange }
         selected={value}
        
      />
        </div>
    )
}

export default Datepicker
