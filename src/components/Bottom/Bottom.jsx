import './bottom.css'
import StatusIcons from "./StatusIcon"
import happy from './../../assets/img/party.png'
import sad from './../../assets/img/sad.png'
import green from './../../assets/img/green.png'
import red from './../../assets/img/red.png'
import yellow from './../../assets/img/yellow.png'

export default function Bottom({numQuestions, numCompleted, statusIcons, finished, zapAmount}) {
    return (
        <footer className={finished ? 'end' : ''}>
            {finished 
                ? zapAmount === numQuestions
                    ? 
                        <>
                            <div className='ending'>
                                <img src={happy}></img>
                                <p>PARABÉNS!</p>
                            </div>
                            <p className='ending-mensage'>Você não esqueceu de nenhum flashcard!</p> 
                            <p>{numCompleted}/{numQuestions} CONCLUÍDOS</p>
                        </>
                    : 
                        <>
                            <div className="ending">
                                <img src={sad} />
                                <p>PUTZ!</p>
                            </div>
                            <p className="final-text">Ainda faltaram alguns...
                                Mas não desanime!</p>
                            <p>{numCompleted}/{numQuestions} CONCLUÍDOS</p>
                        </>
                :
                    <p>{numCompleted}/{numQuestions} CONCLUÍDOS</p>
        }
          <div className="status-icon">
                {statusIcons.length !== 0 ? statusIcons.map((statusIcon, i) => {
                    if (statusIcon === './../../assets/img/green.png') {
                        return (
                            <StatusIcons
                                statusIcon={green}
                                key={i}
                            />
                        ) 
                    }
                    else if (statusIcon === './../../assets/img/red.png'){
                        return (
                            <StatusIcons
                                statusIcon={red}
                                key={i}
                            />
                        )
                    }
                    else if (statusIcon === './../../assets/img/yellow.png'){
                        return (
                            <StatusIcons
                                statusIcon={yellow}
                                key={i}
                            />
                        )
                    }
                }) : ""}
            </div>

        </footer>

    )
}

