import { Switch, Route, Link, useHistory } from 'react-router-dom';

function App() {

  const history = useHistory();
  console.log({ history })

// components for history are created
  const forward = () => {
    history.goForward();
  };

  const back = () => {
    history.goBack();
  };

  const push = (url) => {
    history.push(url);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/perfil'>Profile</Link>
          </li>
        </ul>
      </nav>

      <section>
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        <button onClick={() => push('/Error')}>Push</button>
        <Switch>
          <Route exact path='/'>
            <h1>Home</h1>
          </Route>
          <Route exact path='/perfil'>
            <h1>Profile</h1>
          </Route>
          <Route path='*'>
            404: not found
          </Route>
        </Switch>
      </section>

    </div>

  );
}

export default App;
