
export default function alertComp(props){
    console.log(props)
    
    return(
        <div>
           <button onClick={()=>props.myFunction(props.name)}>Click me</button>
        </div>
    ) }

    alertComp.defaultProps = {
        name: " this my default name"
      };