import Employee from '../Employee';
import './Team.css';

const Team = (props) => {
    return (
        (props.employees.length > 0) ? 
        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => <Employee key={employee.nome} name={employee.nome} cargo={employee.cargo} imagem={employee.imagem} backgroundColor={props.primaryColor} />)}
            </div>
        </section>
        : ''
    );
}

export default Team;
