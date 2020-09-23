import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { API, Auth } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
import Loader from "react-loader-spinner"
import moment from "moment-timezone"
import { SectionTitle, FlexWrapper, ListWrapper } from "./styled/global"

const AuthCharges = () => {
  const [loading, setLoading] = useState(true)
  const [charges, setCharges] = useState([])

  useEffect(() => {
    loadCharges()
  }, [])

  const loadCharges = async () => {
    const returnCharges = async () => {
      const apiName = "stripeAPI"
      const apiEndpoint = `/user/${Auth.user.attributes["custom:stripe_id"]}/charges`
      const subs = await API.get(apiName, apiEndpoint)
      setCharges(subs.charges.data)
      setLoading(false)
      return subs
    }

    var subs = await returnCharges()
    console.log("Chrges", subs)
  }
  return (
    <div>
      <SectionTitle>Charge History</SectionTitle>
      {charges.length === 0 && loading === false && (
        <div>No Charges made yet</div>
      )}
      {loading && (
        <Loader type="Rings" color="#00BFFF" height={60} width={60} />
      )}
      <ListWrapper>
        {charges.map((charge, i) => (
          <FlexWrapper className={"mb"} key={i}>
            <div>
              {moment
                .unix(charge.created)
                .format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </div>
            <div>${charge.amount / 100}</div>
            <div>{charge.captured === true && "Success"}</div>
          </FlexWrapper>
        ))}
      </ListWrapper>
    </div>
  )
}

export default withAuthenticator(AuthCharges)
