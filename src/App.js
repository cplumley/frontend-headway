import './App.css';
import Form from './components/Form/Form';
import HeroImage from './components/HeroImage/HeroImage';
import LinkList from './components/LinkList';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HeroImage />
      <Form />
      <LinkList />
    </div>
  );
}

export default App;
