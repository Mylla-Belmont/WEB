const FilhoA = ({vetor, mensagemPai}) => {

    const maiorElemento = () => {
        let maior = vetor[0]
        for (let i = 0; i < vetor.length; i++)
            if (vetor[i] > maior) maior = vetor[i]
        return maior
    }

    return (
        <div>
            <h3> Maior: </h3>
            <button onClick={
                () => {
                    mensagemPai(maiorElemento())
                }
            }>
                Calcular Maior
            </button>
        </div>
    )
}

export default FilhoA