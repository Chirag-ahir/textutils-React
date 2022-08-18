import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './components/Form';


function App() {
  return (

    <>
      <Navbar title="TextUtils - React App" aboutText="About TextUtils" contact="Contact Us" />
      <div className="my-5 mx-3">
        <Form heading="Enter Text To Analyze" />
      </div>
    </>

  );
}

export default App;
