import Login from './componentes/Login';
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';

function App() {
  return (
    <div className="row">
        <Header/>
      <div className="col-auto">
        <Sidebar/>
      </div>
      <div className="col">
        <Login/>
      </div>
    </div>
  );
}

export default App;
