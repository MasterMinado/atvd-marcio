import { Exeplo1 } from "./componentes/Exeplo1";
import { Exemplo2 } from "./componentes/Exemplo2";
import { Header } from "./componentes/Header";

export function App(){
  return (
    <>
      <Header />

      <main>
        <Exeplo1 />
        <Exemplo2 />
      </main>
    </>
  )
}