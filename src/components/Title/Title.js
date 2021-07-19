import './Title.css'

function Title({title}) {
    return (
        <>
            <h2 className="title">{title}</h2>
            <div className="line"/>
        </>
    )
}

export default Title