import { useContext } from "react";
import { MoneyContext } from "./Context";

export default function Dad() {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h2>Dad</h2>
      <p>dad money: {money}</p>
      <button onClick={() => {
        setMoney(money + 1000)
      }
      } style={{
        backgroundColor: 'lightblue'
      }}>Add more 100tk</button>
    </div>
  );
}
