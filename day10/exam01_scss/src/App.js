import './App.css';

function App() {

  let red_btn = {
    backgroundColor: 'rgb(255,0,0)'
  }

  let btn_color = 'blue'


  return (
    <div className="App">
      <div>
        <button className="myui btn" >Normal</button>
        <button className="myui btn" style={red_btn}  >Cancel</button>
        <button className="myui btn" style={ {
          backgroundColor : btn_color,
          padding : "32px 32px"
        } }  > Info </button>
      </div>
    </div>
  );
}

export default App;
