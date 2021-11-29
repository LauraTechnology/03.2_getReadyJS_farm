import { useState } from "react";

function Create({create}) {

    const [inputs, setInputs] = useState ({
        name: "",
        weight: "",
        total_milk: "",
        last_milking_time: "",
    })

    const formControl = (e, what) => {
        const inputsCopy = { ...inputs};
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }

    const handleCreate = () => {
        create(inputs);
    }
    return (
        <div className="cow_farm__form">
            <h2>Add another scooter</h2>
            <div className="cow_farm_form_input">
                <span>Name</span><input type="text" value={inputs.name} onChange={(e) => formControl(e, 'name')} />
                </div>
            <div className="cow_farm_form_input">
                <span>Weight</span><input type="text" value={inputs.weight} onChange={(e) => formControl(e, 'weight')} />
            </div>
            <div className="cow_farm_form_input">
                <span>Total Milk</span><input type="date" value={inputs.total_milk} onChange={(e) => formControl(e, 'total_milk')} />
            </div>
            <div className="cow_farm_form_input">
                <span>Last Milking Time</span><input type="text" value={inputs.last_milking_time} onChange={(e) => formControl(e, 'last_milking_time')} />
            </div>
            <div className="cow_farm_form_input">
                <button onClick={handleCreate}>Add another Cow</button>
            </div>
        </div>
      
            


    )
}

export default Create;