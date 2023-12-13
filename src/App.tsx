
import './App.css'
import { Card } from './components/card/card';
import { ClienteData } from './interface/ClienteData';

function App() {
  const data : ClienteData [] = [];

  return (
  
    <div className="container">
      <h1>Tatuagem</h1>
      <div className="card-grid">
        {data.map(clienteData => <Card 
        price={clienteData.price} 
        title={clienteData.title}
        image={clienteData.image}
        />
        )}
      </div>
  </div>
  )
}

export default App