import React,{ useState } from "react";

// Write your Color component here
const Color = ({color, setSelectedColor, isSelected}) => {
  const className = isSelected ? `${color} selected` : color;
  return (
    <div 
      className={className}
      onClick={()=> setSelectedColor(color)}
    ></div>
  );
};
//picker component
const Picker = ({selectedColor, setSelectedColor}) => {
  return (
  <div id="colors-list">
    <Color color="red" isSelected={selectedColor === "red"} setSelectedColor={setSelectedColor} />
    <Color color="blue" isSelected={selectedColor === "blue"} setSelectedColor={setSelectedColor}/>
    <Color color="green" isSelected={selectedColor === "green"} setSelectedColor={setSelectedColor}/>
  </div>
  );
};
//app component
const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor} style={{backgroundColor: selectedColor}}>{selectedColor}</div>
      </div>
      <Picker selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
    </div>
  );
};

export default App;
