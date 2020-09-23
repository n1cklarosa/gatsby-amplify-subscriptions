import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { API, Auth } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
import moment from "moment-timezone"
import Loader from "react-loader-spinner"
import { SectionTitle, FlexWrapper, ListWrapper } from "./styled/global"

const AuthSubscriptions = () => {
  const [loading, setLoading] = useState(true)
  const [subscriptions, setSubscriptions] = useState([])

  useEffect(() => {
    loadSubscriptions()
  }, [])

  const loadSubscriptions = async () => {
    const returnSubscriptions = async () => {
      const apiName = "stripeAPI"
      const apiEndpoint = `/user/${Auth.user.attributes["custom:stripe_id"]}/subscriptions`
      const subs = await API.get(apiName, apiEndpoint)
      setSubscriptions(subs.subscriptions.data)
      setLoading(false)
      return subs
    }

    var subs = await returnSubscriptions()
    console.log("Subs", subs)
  }
  return (
    <div>
      <SectionTitle>Active Accounts</SectionTitle>
      {subscriptions.length === 0 && loading === false && (
        <div>
          No active accounts,{" "}
          <Link to={"/subscriptions"}>Please click here to choose a plan</Link>
        </div>
      )}
      {loading && (
        <Loader type="Rings" color="#00BFFF" height={60} width={60} />
      )}
      <ListWrapper>
        {subscriptions.map((subscription, i) => (
          <FlexWrapper className={"mb"} key={i}>
            <div>Rate: ${subscription.plan.amount / 100}</div>
            <div>Per: {subscription.plan.interval}</div>
            <div>
              Started:{" "}
              {moment
                .unix(subscription.current_period_start)
                .format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </div>
            <div>
              Ending:{" "}
              {moment.unix(subscription.current_period_end).fromNow(true)}
            </div>
          </FlexWrapper>
        ))}
      </ListWrapper>
    </div>
  )
}

export default withAuthenticator(AuthSubscriptions)
