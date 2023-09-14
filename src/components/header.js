import "./header.css"
function Header(props){
    return(
      <div>
        <center>
        <img src={props.img}></img>
        <h2>Key React Concepts</h2>
        <p>Selected key React concepts you should know about</p>
        </center>
      </div>
    )
}
export default Header;