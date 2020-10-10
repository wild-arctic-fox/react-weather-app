import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Input({onChangeInput, valueInput}) {
    return (
        <div>
            <TextField id="standard-basic" label="Standard" onChange={onChangeInput} value={valueInput}/>
        </div>
    );
}