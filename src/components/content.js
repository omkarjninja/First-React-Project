import "./content.css"
function Content(props){
    return(
      <div className="container">
        <img src={props.img}></img>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    )
}
export default Content;