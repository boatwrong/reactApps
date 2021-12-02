import Reminder from './components/Reminder'
import Add from './components/Add'


function App() {
  return (
    <div className="App">
      <h2>Title</h2>
      <Add className=".btn"/>
      <Reminder text="test" />
    </div>
  );
}

export default App;
