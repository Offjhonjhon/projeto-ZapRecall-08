import {useState} from 'react';
import InitialPage from "../InitialPage/InitialPage";
import Deck from '../Deck/Deck';
import Logo from '../Logo/Logo';
import Bottom from '../Bottom/Bottom';

import './../../css/style.css'
import './../../css/reset.css'



export default function App() {
    const [pageIndex, setPageIndex] = useState("first")
    const [numCompleted, setNumCompleted] = useState(0)
    const [statusIcons, setStatusIcon] = useState([])
    const [goalAndDeck, setGoalAndDeck] = useState({})
    const [zapAmount, setZapAmount] = useState(0)
    let finished = false
    return (
        <>
        {pageIndex === "first"? 
        <InitialPage
                pageIndex={updatedPageIndex => setPageIndex(updatedPageIndex)}
                goalAndDeck={(updatedDeck) => setGoalAndDeck({deck: updatedDeck})}
            />
             : <>
                <Logo />
                <main>
                    <Deck
                        deck={goalAndDeck}
                        updateNumCompleted={numCompletedUpdated => setNumCompleted(numCompletedUpdated + numCompleted)}
                        updateStatusIcon={updateStatusIcon => setStatusIcon([...statusIcons, updateStatusIcon])}
                        updateZapAmount={updateZapAmount => setZapAmount(updateZapAmount + zapAmount)}
                    />
                </main>
                <Bottom
                    numQuestions={goalAndDeck.deck.length}
                    numCompleted={numCompleted}
                    statusIcons={statusIcons}
                    finished={numCompleted === goalAndDeck.deck.length ? !finished : finished}
                    zapAmount={zapAmount}
                    goal={goalAndDeck.goal}
                />
            </> 
        } 
    </>
    )
}
