import { useEffect } from "react"

const MyPromese = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                const vetor = [
                    { nome: "coisa1", ira: 4.5 },
                    { nome: "coisa2", ira: 4.6 },
                    { nome: "coisa3", ira: 4.7 }
                ]
                const meuInt = Math.floor((Math.random() * 10)) + 1
                if (meuInt === 1) reject({ id: 1, mgs: "Erro de conexão" })
                else if (meuInt === 2) reject({ id: 2, mgs: "Erro de dados" })
                else resolve({ id: meuInt, msg: "ok", vetor })
            }
            ,
            3000
        )
    }
)

const Questao01 = () => {

    useEffect(
        () => {
            MyPromese
                .then(
                    (data) => {
                        console.log("id: " + data.id)
                        console.log("vetor: " + data.vetor)
                    }
                )
                .catch(
                    (error) => {
                        console.log("id: " + error.id)
                        console.log("msg: " + error.mgs)
                    }
                )
        }
        ,
        []
    )

    return (
        <>
            <h1> Questão 01 </h1>
        </>
    )
}

export default Questao01