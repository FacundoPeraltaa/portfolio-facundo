import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="bg-gray-100 min-h-screen font-sans">
      {/* Encabezado */}
      <header className="bg-white shadow p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Facundo - Desarrollador Web</h1>
        <p className="text-gray-500 mt-2">Apasionado por el desarrollo de apps móviles y web</p>
      </header>

      {/* Sección Sobre mí */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sobre mí</h2>
        <p className="text-gray-600">
          Soy un desarrollador con experiencia en aplicaciones móviles y web usando React Native, Firebase y herramientas modernas. Me enfoco en construir interfaces intuitivas y soluciones funcionales para el usuario final.
        </p>
      </section>

      {/* Sección Proyectos */}
      <section className="bg-white p-8 max-w-4xl mx-auto rounded-lg shadow mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Proyectos</h2>
        <ul className="space-y-4">
          <li className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-bold text-gray-800">App Mobile y Web de Gestión de Tambos - Farmerin</h3>
            <p className="text-gray-600">
              Aplicación para controlar animales, cargar tratamientos, visualizar gráficas y administrar la información en tiempo real usando Firebase.
            </p>
            <a className="text-blue-600 hover:underline" href="#" target="_blank">Ver en GitHub</a>
          </li>
           <li className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-bold text-gray-800">Pagina Web de inmobiliaria - Paris Negocios Inmobiliarios</h3>
            <p className="text-gray-600">
             Pagina con experiencia de usuario y para al administrador contiene un login y activa el modo administrador para que el mismo pueda subir sus propiedades
            </p>
            <a className="text-blue-600 hover:underline" href="#" target="_blank">Ver en GitHub</a>
          </li>
          {/* Podés agregar más proyectos similares aquí */}
        </ul>
      </section>

      {/* Sección Tecnologías */}
      <section className="p-8 max-w-4xl mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tecnologías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
          <span>React Native</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>Firebase</span>
          <span>Expo</span>
          <span>Git / GitHub</span>
          <span>Firebase</span>
        </div>
      </section>

      {/* Sección Contacto */}
      <section className="bg-white p-8 max-w-4xl mx-auto rounded-lg shadow mt-6 mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contacto</h2>
        <p className="text-gray-600 mb-2">Podés escribirme a: <a className="text-blue-600 hover:underline" href="mailto:facundoperaltainfo@gmail.com">facundoperaltainfo@gmail.com</a></p>
        <p className="text-gray-600">GitHub: <a className="text-blue-600 hover:underline" href="https://github.com/FacundoPeraltaa" target="_blank">github.com/FacundoPeraltaa</a></p>
      </section>
    </main>
  );
}


export default App;
