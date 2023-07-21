import './TextField.css'

const TextField = (props) => {

    const whenTyped = (e) => {
        props.whenChanged(e.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyped} required={props.required} placeholder={props.placeholder}/>
        </div>
    );
}

export default TextField;
