import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';

const Proyecto = (props) => {
  const match = useRouteMatch();
  const { proyecto_id } = match.params;
  return (
    <h2>Project {proyecto_id}</h2>
  )
};

// nested routes
const Portafolio = () => {
  const match = useRouteMatch();
  console.log({ match });
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        <li>
{/* match.url is used for code maintainability */}
          <NavLink activeStyle={{ fontSize: 20 }} activeClassName='activado' exact to={`${match.url}/proyecto-1`}>Project 1</NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ fontSize: 20 }} activeClassName='activado' exact to={`${match.url}/proyecto-2`}>Project 2</NavLink>
        </li>
      </ul>
      <div>
        <Switch>
{/* variable path */}
          <Route path={`${match.path}/:proyecto_id`}>
            <Proyecto />
          </Route>
        </Switch>
      </div>
    </div>
    )
};

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName='activado' exact to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName='activado' exact to='/portafolio'>Portfolio</NavLink>
          </li>
        </ul>
      </nav>

      <section>
        <Switch>
          <Route exact path='/'>
            <h1>Home</h1>
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
