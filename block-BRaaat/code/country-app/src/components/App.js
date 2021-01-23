import countries from "../data/countries.json";

export default function App() {
  return (
    <div className="container flex">
      {
        countries.map(country => {
          return <Country key={country.code} {...country}/>
        })
      }
    </div>
  );
}

function Country(props) {
  return (
    <button onClick={() => alert(`${props.code} ${props.emoji}`)} className="country">
      <span className="emoji">{props.emoji}</span>
      {props.name}
    </button>
  )
}