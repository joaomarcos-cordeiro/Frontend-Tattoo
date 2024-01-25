
import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';

import { useClienteData } from './hooks/useClienteData';
import { CreateModal } from './components/card/create-modal/create-modal';


function App() {
  const { data } = useClienteData ();
 const [isModalOpen, setIsModalOpen] = useState(false);
 
 const handleOpenModal = () => {
  setIsModalOpen(prev => !prev)
 }

  return (
  
    <div className="container">
      <h1>Tatuagens</h1>
      <div className="card-grid">
        {data?.map(clienteData =>
         <Card 
        price={clienteData.price} 
        title={clienteData.title}
        image={clienteData.image}
        />
        )}
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>novo</button>
      </div>
  </div>
  )
}

export default App