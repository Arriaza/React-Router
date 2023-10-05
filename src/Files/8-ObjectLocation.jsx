import { Switch, Route, Link, useLocation } from 'react-router-dom';

// serves to directly access some parameters of the Query
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const chancho = query.get('chanchito');
  const nombre = query.get('nombre');
  console.log({ chancho, nombre })
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
