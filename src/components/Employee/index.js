import './Employee.css';

const Employee = (props) => {
    return (
        <div className='employee'>
            <div className='header' style={{ backgroundColor: props.backgroundColor }}>
                <img src={props.imagem} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    );
}

export default Employee;
