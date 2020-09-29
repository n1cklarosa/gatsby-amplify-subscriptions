import React from "react"

import { Option, OptionContent } from "../components/styled/global"
import CheckoutButton from "../components/CheckoutButton"

const PackageOption = ({ plan }) => {
  return (
    <Option >
      <OptionContent>
        <h3>{plan.title}</h3>
        <h4>${plan.currentPrice} per month</h4>
        <div>
          <p>{plan.subtitle}</p>
          <ul className={"contents"}>
            {plan.items.map((item, k) => {
              return <li key={k}>{item}</li>
            })}
          </ul>
        </div>
        <CheckoutButton priceId={plan.id} title={"Sign Up Now!"} />
      </OptionContent>
    </Option>
  )
}

export default PackageOption
