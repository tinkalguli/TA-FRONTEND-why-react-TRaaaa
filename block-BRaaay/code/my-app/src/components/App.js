import colors from "../data/colors.json";

function App() {
  return (
    <section className="container">
      {
        Object.entries(colors).map(color => {
          return <Row key={color[0]} {...color} />
        })
      }
    </section>
  );
}

function Row(props) {
  return(
    <section className="flex row">
      <div className="color-heading">
        <h3>{props[0]}</h3>
        <p>colors.{props[0]}</p>
      </div>
      <ul className="colors flex flex-wrap">
          {
            typeof props[1] === "string"
            ? <Color color={props[1]}/>
            : props[1].map((color, i) => {
                let weight = (i + 1) * 50;
                let obj = {color, weight};
                return <Color key={i} {...obj} />
              })
          }
      </ul>
    </section>
  )
}

function Color(props) {
  return (
    <li className="color-item">
        <span className="color" style={{backgroundColor: props.color}}></span>
        <div className="flex justify-between">
          <span>{props.weight}</span>
          <span>{props.color}</span>
        </div>
    </li>
  )
}

export default App;
