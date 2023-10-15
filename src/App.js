import React from 'react';
import ColorPicker from './ColorPicker'; 
function App() {
  return (
    <div className="App">

      <ColorPicker colors={['#fe0000', '#00ff01', '#0000fe', '#ffff00', '#00ffff', '#81007f', '#ffc0cb', '#ff8b00']} />
    </div>
  );
}

export default App;
