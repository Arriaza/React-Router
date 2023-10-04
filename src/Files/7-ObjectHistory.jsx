import { Switch, Route, Link, useHistory } from 'react-router-dom';

function App() {

// useHistory es el hook que nos permite acceder al historial de nuestra aplicación
  const history = useHistory();
// se imprime un objeto, tiene diferentes acciones
  console.log({ history })

// se crean los componentes para el historial
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
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
{/* en push hay que indicar la ruta para ir */}
        <button onClick={() => push('/chanchitofeliz')}>Push</button>

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

