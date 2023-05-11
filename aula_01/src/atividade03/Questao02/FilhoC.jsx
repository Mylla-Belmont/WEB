const FilhoC = ({vetor, mensagemPai}) => {

    const mediaElemento = () => {
        let media = 0;
        let cont = 0;
        for (let i = 0; i < vetor.length; i++) {
            media += vetor[i]
            cont++
        }
        return (media/cont)
    }

    return (
        <div>
            <h3> Media: </h3>
            <button onClick={
                () => {
                    mensagemPai(mediaElemento())
                }
            }>
                Calcular Media
            </button>
        </div>
    )
}

export default FilhoC