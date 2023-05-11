const FilhoB = ({vetor, mensagemPai}) => {

    const menorElemento = () => {
        let menor = vetor[0]
        for (let i = 0; i < vetor.length; i++)
            if (vetor[i] < menor) menor = vetor[i]
        return menor
    }

    return (
        <div>
            <h3> Menor: </h3>
            <button onClick={
                () => {
                    mensagemPai(menorElemento())
                }
            }>
                Calcular Menor
            </button>
        </div>
    )
}

export default FilhoB