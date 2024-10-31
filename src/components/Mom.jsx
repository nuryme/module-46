import { useContext } from "react"
import { AssetContext } from "./Context"
import Sis from "./Sis"

export default function Mom() {
    const gift = useContext(AssetContext)

  return (
    <div>
      <h2>Mom</h2>
      <p>has: {gift}</p>

      <Sis></Sis>
    </div>
  )
}
