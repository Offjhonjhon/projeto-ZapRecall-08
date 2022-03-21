import './bottom.css'



export default function Bottom({length, answered, icons}) {
    return (
        <footer>
            <p>{answered}/{length}</p>
            <div className='icons'>{icons}</div>
        </footer>
    );
} 