import { useContext } from "react"
import { MoneyContext } from "./Context"

export default function Sis() {
    const [money] = useContext(MoneyContext)

  return (
    <div>
      <h2>Sister</h2>
      <p>sis money: {money}</p>
    </div>
  )
}
