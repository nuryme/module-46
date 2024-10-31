import { createContext, useState } from "react";
import Dad from "./Dad";
import Mom from "./Mom";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000)

export default function Context() {
    const [money, setMoney] = useState(1000)

  return (
    <div>
        <h4>Grandpa money: {money}</h4>
        <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="diamond">
        <section>
          <Dad />
          <Mom />
        </section>
      </AssetContext.Provider>
        </MoneyContext.Provider>
    </div>
  );
}

/**
 * 1. create a context and export it
 * 2. add provider for the context with a value. value can be anything
 * 3. useContext to access value in the context API
 */
