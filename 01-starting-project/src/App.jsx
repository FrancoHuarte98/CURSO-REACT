
import { CORE_CONCEPTS } from './data.js'; //Aca importo los datos desde data
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';




function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} /> {//Es lo mismo pero de manera abrevida los '...' agregan todo los items que vemos arriba
            <CoreConcept {...CORE_CONCEPTS[2]} /> }
            <CoreConcept {...CORE_CONCEPTS[3]} />                                               
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
