import users from "../data/users.json";

let fruitsEmoji = {
  "strawberry": "🍓",
  "banana": "🍌",
  "apple": "🍎"
}

function App() {
  return (
    <section className="container flex flex-wrap">
      {
        users.map((user, i) => {
          return <Card key={user.id} {...user} />
        })
      }
    </section>
  );
}

function Card(props) {
  return (
      <article className="flex card">
          <div className="main-info">
              <img
              className="img"
              src={props.picture}
              alt="user profile"
              />
              <h3 className="flex name">
                {props.name}
                <span className="emoji">
                  {props.gender === "male" ? "🙋‍♂️" : "🤷‍♀️"}
                </span>
              </h3>
              <h2 className="balance">{props.balance}</h2>
          </div>

          <ul className="extra-info" id={props.isActive ? "active-bg" : "unactive-bg"}>
            <li>
              <label className="label-text">Age:</label> {props.age}
            </li>
            <li>
              <label className="label-text">Eye Color:</label> {props.eyeColor}
            </li>
            <li>
              <label className="label-text">
                Favorite Fruit:
              </label> {fruitsEmoji[props.favoriteFruit]}
            </li>
            <li>
              <label className="label-text">Company:</label> {props.company}
            </li>
            <li>
              <label className="label-text">Email:</label> {props.email}
            </li>
            <li>
              <label className="label-text">Phone:</label> {props.phone}
            </li>
          </ul>
      </article>
  )
}

export default App;
