import { Switch, Route, Link, useLocation } from 'react-router-dom';

// sirve para acceder directamente a algunos parametros de la Query
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
// de esta manera podemos acceder a los parametros que le pasemos por el parametro query a nuestr URL
  const chancho = query.get('chanchito');
  const nombre = query.get('nombre');
  console.log({ chancho, nombre })
  return (
    <div>
      <nav>
        <ul>
          <li>
{/* el anchor sirve para navegar entre distintos links, al abrir otro link es interceptado por react-router que hace uso de nuestro
navegador pero también contiene el estado donde hemos navegado, donde venimos y a donde vamos, dentro de nuestra app y podemos ver el
historial de navegación  */}
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/perfil'>Perfil</Link>
          </li>
        </ul>
      </nav>

      <section>
{/* Switch detecta cual ruta fue la primera que renderizo para prevenir que se sigan renderizando los hijos    */}
        <Switch>
{/* path sirve para identificar si se renderiza o no contenido */}
{/* cuando utilizamos Switch es necesario indicar las rutas mas especificas  */}
{/* es necesario saber cuales son las rutas, la propiedad de exact se utiliza solo para la raiz  */}
          <Route exact path='/'>
            <h1>Inicio</h1>
          </Route>
          <Route exact path='/perfil'>
            <h1>Perfil</h1>
          </Route>
          <Route path='*'>
            404: ruta no encontrada
          </Route>
        </Switch>
      </section>

    </div>

  );
}

export default App;

