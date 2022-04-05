import './App.css';
import DynamicForm from './component/DynamicForm';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    for(let i=0; i<e.target.length-1; i++) {
      console.log(`${e.target[i].name} : ${e.target[i].value}`)
    }
    e.target.reset()
  }

  return (
    <div className="App">
      <h2>... App</h2>

      <form onSubmit={handleSubmit}>
        <DynamicForm field1='firstName' field2='lastName' />
        <DynamicForm field1='phone' field2='city' />

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default App;
