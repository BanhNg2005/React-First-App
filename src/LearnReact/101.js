import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Middle Name: {props.middleName}</h2>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
}

const App = () => {
  
  return (
    <div className="App">
      <Person name={"Bao Uyen"} middleName={"Le"} lastName={"Nguyen"} age={12}/>
      <Person name={"Le"} middleName={"Thu"} lastName={"Ho"} age={46}/>
      <Person name={"Tue Linh"} middleName={"Ho"} lastName={"Ninh"} age={11 + 2}/>
      <Person name={"Phuong"} middleName={"Thu"} lastName={"Ho"} age={43}/>
    </div>
  );
}

export default App;

  // const name = "Bao Anh";
  // const isNameShowing = false;
  
  // return (
  //   <div className="App">
  //     <h1>Hello, {isNameShowing ? name : 'someone'}!</h1>
  //   </div>
  // );
  // output: Hello, someone!

  // const name = "Bao Anh";
  
  // return (
  //   <div className="App">
  //     <h1>Hello, {2+2}!</h1>
  //     {name ? (
  //       <>
  //         <h1>Hello, {name}</h1>
  //       </>
  //     ) : (
  //       <>
  //         <h1>lol</h1>
  //         haha
  //       </>
  //     )}
  //   </div>
  // );
  // output: Hello, 4!Hello, Bao Anh