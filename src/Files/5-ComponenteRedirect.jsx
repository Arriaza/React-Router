import { Switch, Route, Link, Redirect } from 'react-router-dom';

// redirige al usuario a otra parte de la aplicacion, Redirect reemplaza la actual ruta ya que cuando lleguemos a esta ruta y
// vemos nuestra ruta anterior (perfil), cuando veamos el historial nos indica que de perfil fuimos a inicio y que no pasamos por
// portafolio si queremos que en lugar de reemplazar la ruta se agregae utlizamos push, lo cual dejara portafolio y agregara inicio

const Portafolio = () => {
  const loggedIn = false
  if (!loggedIn) {
    return <Redirect push to='/' />
  }

// no se muestra en pantalla
  return (
    <h1>Portafolio</h1>
  )
}

function App() {
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
          <li>
            <Link to='/portafolio'>Portafolio</Link>
          </li>
        </ul>
      </nav>

      <section>
{/* Switch detecta cual ruta fue la primera que renderizo para prevenir que se sigan renderizando los hijos    */}
        <Switch>
{/* path sirve para identificar si se renderiza o no contenido */}
{/* cuando utilizamos Switch es necesario indicar las rutas mas especificas  */}
{/* es necesario saber cuales son las rutas, la propiedad de exact se utiliza solo para la raiz  */}
{/* exact se debe indicar sino siempre nos llevara al inicio, from to, desde la raiz a la dirección  */}
          <Redirect exact from='/' to='/inicio' />
          <Route exact path='/inicio'>
            <h1>Inicio</h1>
          </Route>
          <Route path='/perfil'>
            <h1>Perfil</h1>
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



