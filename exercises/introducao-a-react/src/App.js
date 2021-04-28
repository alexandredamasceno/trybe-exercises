// import logo from './logo.svg';
import './App.css';
// import Task from './list';

const myArr = ['Acordar', 'Alongar', 'Banhar', 'Café', 'Codar'];

function App() {
  return (
    <div>
      <ol>
        {myArr.map(tarefa => <li>{tarefa}</li>)}
      </ol>
    </div>
  );
}

export default App;
