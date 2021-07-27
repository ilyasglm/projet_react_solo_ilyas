import Body from "./components/structure/Body";
function App() {
  let myColor = JSON.parse(localStorage.getItem('dataMyColor'))
  return (
    <div id='app' className={myColor==='red'?'bg-danger':(myColor==='green'?'bg-success':'bg-primary')}>
      <Body/>
    </div>
  );
}

export default App;
