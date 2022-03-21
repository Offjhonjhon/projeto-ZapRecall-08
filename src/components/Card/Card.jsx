import { useState } from "react"
import './card.css'
import play from './../../assets/img/Vector.png'
import curvedArrow from './../../assets/img/setinha.png'
import red from './../../assets/img/red.png'
import yellow from  './../../assets/img/yellow.png'
import green from './../../assets/img/green.png'

export default function Card({questionIndex, question, answer,updateNumCompleted, updateStatusIcon, updateZapAmount}){
    function check(state) {
        if(state === 'front-face') {
            return (
                <>
                    <p>Pergunta {questionIndex}</p>
                    <img src={play} ></img>
                </>
            )
        }
        else if (state === 'back-face'){
            return (
                <>
                    <p>{question}</p>
                    <img src={curvedArrow} onClick={(button) =>{
                        button.stopPropagation()
                        setCardStatus('turned-back-face')
                    }}/>
                </>
            )
        }
        else if (state === 'turned-back-face'){
            return (
                <>
                    <p>{answer}</p>
                    <div className="options">
                        <button onClick={(button) => {
                            button.stopPropagation()
                            updateNumCompleted(1);
                            updateStatusIcon('./../../assets/img/red.png');
                            setCardStatus('didnt-remember');
                        }}>Não lembrei
                        </button>

                         <button onClick={(button) => {
                            button.stopPropagation()
                            updateNumCompleted(1)
                            updateStatusIcon("./../../assets/img/yellow.png")
                            setCardStatus("almost-didnt-remember")
                        }}>
                            Quase não lembrei
                        </button>

                        <button onClick={(button) => {
                            button.stopPropagation()
                            updateNumCompleted(1)
                            updateZapAmount(1)
                            updateStatusIcon("./../../assets/img/green.png")
                            setCardStatus("zap")
                        }}>
                            Zap!
                        </button>
                    </div>
                </>

            );
        }
        else if (state === "didnt-remember") {
            return (
                <>
                    <p>Pergunta {questionIndex}</p>
                    <img src={red} />
                </>
            )
        }
        else if (state === "almost-didnt-remember") {
            return (
                <>
                    <p>Pergunta {questionIndex}</p>
                    <img src={yellow} />
                </>
            )
        }
        else if (state === "zap") {
            return (
                <>
                    <p>Pergunta {questionIndex}</p>
                    <img src={green} />
                </>
            )
        }
    }

    const [cardStatus, setCardStatus] = useState("front-face");

    return (
        <div className={cardStatus} onClick={() => {
            cardStatus === "front-face"
                ? setCardStatus("back-face")
                : setCardStatus("front-face")
        }
        }>
            {check(cardStatus)}
        </div>
    )
}