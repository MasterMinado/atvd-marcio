import { Exemplo1 } from "./componentes/Exemplo1";
import { Exemplo2 } from "./componentes/Exemplo2";
import { Header } from "./componentes/Header";

export function App(){
  return (
    <>
      <Header />

      <main>
        <Exemplo1 />
        <Exemplo2 />
      </main>
    </>
  )
}