import './App.css';
import Card from './component/Card';

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h2 className='heading'>Simple, trafic-based pricing</h2>
          <p className='sub-heading'>Sign-up for our 30-day trial. No credit card required.</p>
        </header>
        <Card />
      </div>
    </div>
  );
}

export default App;
