import React, { useState, useEffect } from "react";

const Pizza = () => {

    const [name, setName ] = useState('')
    const [notes, setNotes ] = useState('')

    const onNameChange = (evt) => setName(evt.target.value)
    const onNotesChange = (evt) => setNotes(evt.target.value)

    return (
        <form>
            <label>
                Name: 
                <input onChange={onNameChange} /> 
            </label>
            <br></br>
            <select>
                <option
                value="medium">Medium</option>
                <option
                value="large">Large</option>
                <option
                value="x-large">X-Large</option>
            </select>
            <br></br>
            <input type="checkbox" id="cheese" name="cheese"
            />
            <label for="cheese">Cheese</label>
            <input type="checkbox" id="pepperoni" name="pepperoni"
            />
            <label for="pepperoni">Pepperoni</label>
            <input type="checkbox" id="bacon" name="bacon"
            />
            <label for="bacon">Bacon</label>
            <input type="checkbox" id="pineapple" name="pineapple"
            />
            <label for="pineapple">Pineapple</label>
            <br></br>
            <label>
                Additional Notes: 
                <input onChange={onNotesChange} /> 
            </label>

        </form>
    )
}

export default Pizza;