import "./App.css";
import Img from "./pngwing.com.png";
import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";
import { useState } from "react";

const url = "https://api.nbp.pl/api/exchangerates/tables/a/";

function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [count, setCount] = useState(0);

  const onInputChange = (value) => {
    setAmount(value);
  };
  const onSelectChange = (value) => {
    setCurrency(value);
  };
  const getCurrencies = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => convertValue(data))
      .catch((err) => console.log(err));
  };
  const convertValue = (data) => {
    const mid = data[0].rates.find((element) => element.code === currency).mid;
    countThePln(mid, amount);
  };
  const countThePln = (foreignCurrency, domesticCurrency) => {
    const result = foreignCurrency * domesticCurrency;
    setCount(result.toFixed(2));
  };

  return (
    <>
      <p>
        <img className="logo" src={Img} alt="logo" id="logo" />
      </p>

      <h1 className="header">Przelicznik walut</h1>
      <div className="container">
        <div className="grid-container">
          <section className="foreign-section">
            <div className="wrapper">
              <form className="form">
                <Input onInputChange={onInputChange} />
                <Select onSelectChange={onSelectChange} />
              </form>
            </div>
          </section>

          <section className="domestic-section">
            <div className="wrapper">
              <div className="pln-converted">{count}</div>
              <div className="pln-name">PLN</div>
            </div>
          </section>
          <Button onClick={getCurrencies} />
        </div>
      </div>
    </>
  );
}
export default App;
