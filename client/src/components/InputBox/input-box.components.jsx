import React from 'react'

const InputBox = props => {
    const {...otheProps } = props
    return ( 
        <input {...otheProps} />
    );
}
 
export default InputBox;