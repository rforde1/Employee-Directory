import React from 'react';
import Navbar from "./components/Navbar";
import Employee from './components/EmpContainer';

class App extends React.Component {
  render() {
      return (
          <div className="container">
              <Navbar />
             <Employee/>
          </div>
      )
  }
}
// HI
export default App;
