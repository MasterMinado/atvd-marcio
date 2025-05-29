import { useEffect, useState } from "react"

export function Exemplo1() {
    const [numero, setNumero] = useState(0)
    

    useEffect(() => {
        console.log(`o estado número mudou. seu valor agora é ${numero}`)
    }, [numero])

    return (
        <section>
            <h2>Exemplo 1: utilizações do useEffect</h2>
            <p>o useEffect tem duas utilidades principais:</p>
            <ol>
                <li>Executar alguma função ou algum bloco de código assim que a página é carregada</li>
                <li>monitorar a mudança de um estado para executar algum bloco de código ou função</li>
            </ol>

            <div>
                <h3>número: {numero}</h3>
                <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
            </div>
        </section>
    )
}