import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [employees, setEmployees] = useState([]);

  const toTheNewAddEmployee = (employee) => {
    setEmployees([...employees, employee]);
  }

  return (
    <div className="App">
      <Banner />
      <Form toTheRegisteredEmployee={employee => toTheNewAddEmployee(employee)} />
      <Team name="Programação" />
      <Team name="Front-End" />
    </div>
  );
}

export default App;
