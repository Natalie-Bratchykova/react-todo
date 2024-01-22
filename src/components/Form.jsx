
export const  Form = (props) =>{
    return(
        <form className="form">
            <input type="text" value={props.value} onChange={(e)=>{
                props.checkChange(e)
            }}/>
            <button onClick={(e)=>{
                props.checkClicking(e)
            }}>Add</button>
        </form>
    )
}