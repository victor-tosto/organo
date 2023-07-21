import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css';

const Form = (props) => {

    const times = [
        'Programação',
        'Front End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        props.toTheRegisteredEmployee({
            nome,
            cargo,
            imagem,
            time
        });
    }

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome" value={nome} whenChanged={value => setNome(value)} />
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo" value={cargo} whenChanged={value => setCargo(value)} />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" value={imagem} whenChanged={value => setImagem(value)} />
                <DropdownList required={true} label="Time" itens={times} value={time} whenChanged={value => setTime(value)} />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    );
}

export default Form;