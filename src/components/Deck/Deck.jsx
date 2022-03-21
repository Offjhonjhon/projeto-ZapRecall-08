import Card from "./../Card/Card"
import './../Deck/deck.css'
export default function Deck({ deck, updateNumCompleted, updateStatusIcon, updateZapAmount}) {
    return (
        <div className="deck">
            {deck.deck.map(({ question, answer }, questionIndex) => {
                return (
                    <Card
                        questionIndex={questionIndex + 1}
                        key={questionIndex + 1}
                        question={question}
                        answer={answer}
                        updateNumCompleted={updateNumCompleted}
                        updateStatusIcon={updateStatusIcon}
                        updateZapAmount={updateZapAmount}
                    />
                )
            })
            }
        </div>
    )
}