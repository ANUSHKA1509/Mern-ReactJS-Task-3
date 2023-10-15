import React, { useState } from 'react';
import './ColorPicker.css'; 

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const toggleOpen = () => setIsOpen(!isOpen);

  const selectColor = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    boxShadow: '0px 0px 20px rgba(0,0,0,0.5)',
    padding: '20px',
    borderRadius: '15px',
    width: '50%',
    height: '450px',
    margin: 'auto'
};

  return (
    <div style={{ backgroundColor: '#bdb5dc', minHeight: '100vh' }}>
      <h1 style={{textAlign: "center"}}>ReactJS Task - 3 </h1>
      <br/>
      <h1 style={{textAlign: "center"}}>Color Picker</h1>
    
      <div style={{ ...containerStyle, backgroundColor: selectedColor }}>
        {isOpen && (
          <div className="color-list">
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => selectColor(color)}
                className="color-square"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
        <button onClick={toggleOpen} className="color-button">
          Pick a color
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
