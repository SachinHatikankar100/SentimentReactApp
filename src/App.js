import './App.css';
import Buttons from './Components/Buttons';
import Sharedtextarea from './Components/SharedTextArea';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Sentiment App</h1>
      </header>
      <main>
        <Sharedtextarea />
        <Buttons />
      </main>
      <footer className='footer'>
        Page created by Sachin Hatikankan
      </footer>
    </div >
  );
}


export default App;
