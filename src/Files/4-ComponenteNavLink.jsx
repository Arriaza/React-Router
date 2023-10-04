import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';

const Proyecto = (props) => {
  const match = useRouteMatch();
  const { proyecto_id } = match.params;
  return (
    <h2>Proyecto {proyecto_id}</h2>
  )
};

// rutas anidadas
const Portafolio = () => {
  const match = useRouteMatch();
  console.log({ match });
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
{/* se utiliza match.url para la mantenibilidad del codigo
    para mostrar la clase de activo en el link que estamos (página actual) utilizamos exact,
    de esta manera podemos entregarle una UI al usuario si se encuentra navegando a través de distintas rutas, se le puede entregar
    un feedback de en cual ruta se encuentra y su historial
    activeClassName sirve para cambiarle el nombre a la clase que esta seleccionada
    activeStyle si deseamos aplicarle un style inline
    */}
          <NavLink activeStyle={{ fontSize: 20 }} activeClassName='activado' exact to={`${match.url}/proyecto-1`}>Proyecto 1</NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ fontSize: 20 }} activeClassName='activado' exact to={`${match.url}/proyecto-2`}>Proyecto 2</NavLink>
        </li>
      </ul>
      <div>
        <Switch>
{/* cuandro agregamos : se indica que vamos a utilizar una variable en la ruta y luego se coloca el nombre de esa variable */}
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
            <NavLink activeClassName='activado' exact to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink activeClassName='activado' exact to='/portafolio'>Portafolio</NavLink>
          </li>
{/* otra manera de identificar si un link se encuentra seleccionado o no, utilizamos isActive, recibe 2 argumentos
    match, location
    match aparece cuando nos encontramos en la ruta del link (exact to)
    location hash se poblara cuando le pasemos un # y un valor después
             search cuando pasemos parametros por query (?) y un valor después
    si deseamos marcar el link como activo o no, return true o false
          <li>
            <NavLink isActive={(match, location) => {
              console.log(match, location)
              return false
            }} exact to='/portafolio'>Portafolio</NavLink>
          </li>
*/}
        </ul>
      </nav>

      <section>
        <Switch>
          <Route exact path='/'>
            <h1>Inicio</h1>
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
