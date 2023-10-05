import { Switch, Route, Link, Redirect } from 'react-router-dom';

const Portafolio = () => {
  const loggedIn = false
  if (!loggedIn) {
    return <Redirect push to='/' />
  }

  return (
    <h1>Portfolio</h1>
  )
}

function App() {
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
          <li>
            <Link to='/portafolio'>Portfolio</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Switch>
          <Redirect exact from='/' to='/inicio' />
          <Route exact path='/inicio'>
            <h1>Home</h1>
          </Route>
          <Route path='/perfil'>
            <h1>Profile</h1>
          </Route>
          <Route path='/portafolio'>
            <Portafolio />
          </Route>
        </Switch>
      </section>

    </div>

  );
}

export default App;
