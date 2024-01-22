import React from "react"

export const ListItem = (props) =>{

    let status ={
        done:"done",
        notDone:"not done"
    }
    let[currentStatus, setStatus] = React.useState(status.notDone);

// for line through the text
    // function handleStatus(e){
    //     let currentEl = e.target;
    //     let currentElStatus = e.target.dataset.status;
    //     if(currentElStatus === status.done){
    //         currentEl.classList.remove("done-task")
    //         setStatus(status.notDone)
    //     }else{
    //         currentEl.classList.add("done-task")
    //         setStatus(status.done)
    //     }

    // }

    return <li data-status={currentStatus} onClick={()=>{
        props.checkDeletion(props.id)
    }}>{props.value}</li>
}