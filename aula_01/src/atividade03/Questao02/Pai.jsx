// import * as Filhos from './Filhos'
import FilhoA from "./FilhoA"
import FilhoB from "./FilhoB"
import FilhoC from "./FilhoC"

const Pai = () => {

    // const [maior, setMaior] = useState(0)
    // const [menor, setMenor] = useState(0)
    // const [media, setMedia] = useState(0)

    const mensagemFilho = (mensagem) => {
        alert(mensagem)
    }

    return (
        <div>
            <h1> Calculo Vetor </h1>
            <FilhoA vetor={[1,2,3,4,5]} mensagemPai={mensagemFilho}/>
            <FilhoB vetor={[1,2,3,4,5]} mensagemPai={mensagemFilho}/>
            <FilhoC vetor={[1,2,3,4,5]} mensagemPai={mensagemFilho}/>
        </div>
    )

}

export default Pai