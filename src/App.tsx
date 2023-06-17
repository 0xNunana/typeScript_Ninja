import Counter from "./components/Counter"
import Heading from "./components/Heading"
import List from "./components/List"
import Section from "./components/Section"

function App() {


  return (
    <>
     <Heading title="Welcome to TypeScript"/>
  <Section title="Start Right" >
    Typescript is a superset of Javascript.
  </Section>
  <p>Lets count how many times the button below is clicked</p>
<Counter/>
<List items={["coffee","tacos","code"]} render={(item: string)=><span className="gold">{item}</span>}/>
    </>
 
  )
}

export default App
