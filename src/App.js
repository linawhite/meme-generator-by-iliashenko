import './App.sass';
import './fonts.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Meme></Meme>
    </div>
  );
}

export default App;
