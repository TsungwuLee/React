function Welcome(props) {
    let sayHelloTimes = 1;
    return (
      <div>
        <h1>
        Hello 我是 {props.name}，我今年 {props.age} 歲，我打招呼 {sayHelloTimes} 次
      
      </h1>
       <input type="button" value="再次打招呼" />
      </div>
      
    
    ); 
}
function App(){
    return ( 
      <div>
        <Welcome name="Mary" age="3"></Welcome>
        <Welcome name="BOB" age="5"></Welcome>
      </div>
    )
  }
const root = ReactDOM.createRoot(document.querySelector('#root')); 
root.render(<App/>);