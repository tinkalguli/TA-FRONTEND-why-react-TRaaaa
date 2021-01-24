
function App() {
  return (
    <div className="container">
      <h2>Samll size buttons</h2>
      <Button
        size="small"
        color="light"
        type="primary"
        handleClick={() => alert("Small primary button with light mode")}
      />
      <Button
        size="small"
        color="light"
        type="secondary"
        handleClick={() => alert("Small Secondary button with light mode")}
      />
      <Button
        size="small"
        color="light"
        type="tertiary"
        handleClick={() => alert("Small Tertiary button with light mode")}
      />
      <br />
      <Button
        size="small"
        color="dark"
        type="primary"
        handleClick={() => alert("Small Primary button with dark mode")}
      />
      <Button
        size="small"
        color="dark"
        type="secondary"
        handleClick={() => alert("Small Secondary button with dark mode")}
      />
      <Button
        size="small"
        color="dark"
        type="tertiary"
        handleClick={() => alert("Small Tertiary button with dark mode")}
      />
      <h2>medium size buttons</h2>
      <Button
        size="medium"
        color="light"
        type="primary"
        handleClick={() => alert("Medium primary button with light mode")}
      />
      <Button
        size="medium"
        color="light"
        type="secondary"
        handleClick={() => alert("Medium Secondary button with light mode")}
      />
      <Button
        size="medium"
        color="light"
        type="tertiary"
        handleClick={() => alert("Medium Tertiary button with light mode")}
      />
      <br />
      <Button
        size="medium"
        color="dark"
        type="primary"
        handleClick={() => alert("Medium Primary button with dark mode")}
      />
      <Button
        size="medium"
        color="dark"
        type="secondary"
        handleClick={() => alert("Medium Secondary button with dark mode")}
      />
      <Button
        size="medium"
        color="dark"
        type="tertiary"
        handleClick={() => alert("Medium Tertiary button with dark mode")}
      />
      <h2>large size buttons</h2>
      <Button
        size="large"
        color="light"
        type="primary"
        handleClick={() => alert("Large primary button with light mode")}
      />
      <Button
        size="large"
        color="light"
        type="secondary"
        handleClick={() => alert("Large Secondary button with light mode")}
      />
      <Button
        size="large"
        color="light"
        type="tertiary"
        handleClick={() => alert("Large Tertiary button with light mode")}
      />
      <br />
      <Button
        size="large"
        color="dark"
        type="primary"
        handleClick={() => alert("Large Primary button with dark mode")}
      />
      <Button
        size="large"
        color="dark"
        type="secondary"
        handleClick={() => alert("Large Secondary button with dark mode")}
      />
      <Button
        size="large"
        color="dark"
        type="tertiary"
        handleClick={() => alert("Large Tertiary button with dark mode")}
      />
    </div>
  );
}


function Button(props) {
  let size = props.size ?? "medium";
  let type = props.type ?? "primary";
  let color = props.color ?? "light";
  let cbFunction = props.handleClick ?? "";

  return (
    <button
      className={`${size} ${type} ${color}`}
      onClick={cbFunction}
    >
      Button
    </button>
  )
}

export default App;
