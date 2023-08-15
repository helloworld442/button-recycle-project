import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="app">
      <div className="button-template">
        <Button size="large" color="blue">
          large
        </Button>
        <Button size="medium" color="blue">
          medium
        </Button>
        <Button size="small" color="blue">
          small
        </Button>
      </div>
      <div className="button-template">
        <Button size="large" color="red">
          large
        </Button>
        <Button size="medium" color="red">
          medium
        </Button>
        <Button size="small" color="red">
          small
        </Button>
      </div>
      <div className="button-template">
        <Button size="large" color="black">
          large
        </Button>
        <Button size="medium" color="black">
          medium
        </Button>
        <Button size="small" color="black">
          small
        </Button>
      </div>
      <div className="button-template">
        <Button size="large" color="blue" primary>
          large
        </Button>
        <Button size="medium" color="red" primary>
          medium
        </Button>
        <Button size="small" color="black" primary>
          small
        </Button>
      </div>
      <div className="button-template">
        <Button size="large" color="blue" fullWidth>
          large
        </Button>
        <Button size="medium" color="red" fullWidth>
          medium
        </Button>
        <Button size="small" color="black" fullWidth>
          small
        </Button>
      </div>
    </div>
  );
}

export default App;
