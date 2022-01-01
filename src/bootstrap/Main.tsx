import React, { ChangeEvent, useState } from 'react'

function Main() {

    const [value, setValue] = useState('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e);
      setValue(e.target.value);
    };

    return (
        <div>
            Main component
        <form>
            <h3>{value}</h3>
          <input type="text" value={value} onChange={handleInput} />
        </form>
      </div>
    )
}

export default Main
