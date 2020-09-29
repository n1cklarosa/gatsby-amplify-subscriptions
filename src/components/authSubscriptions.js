import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { API, Auth } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
import moment from "moment-timezone"
import Loader from "react-loader-spinner"
import { data } from "../content/data"

import {
  SectionTitle,
  // FlexWrapper,
  // ListWrapper,
  // Item,
  BrandButton,
} from "./styled/global"
import { FiTrash2 } from "react-icons/fi"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"

const env = process.env.ENVIRONMENT
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
      console.log("subs",subs.subscriptions.data)
      setLoading(false)
      return subs
    }

    var subs = await returnSubscriptions()
    console.log("Subs", subs)
  }

  const pressDeleted = subId => {
    let r = window.confirm("Are you sure? this is permanent")
    if (r === true) {
      confirmDelete(subId)
    }
  }

  const confirmDelete = async deleteId => {
    setLoading(true)
    const deleteSubscription = async () => {
      const apiName = "stripeAPI"
      const apiEndpoint = `/user/${deleteId}/delete/subscriptions`
      await API.post(apiName, apiEndpoint)

      loadSubscriptions()
      return subs
    }

    var subs = await deleteSubscription()
    console.log("Subs", subs)
  }

  return (
    <div>
      <SectionTitle>Active Accounts</SectionTitle>
      {subscriptions.length === 0 && loading === false && (
        <div>
          No active accounts,{" "}
          <Link to={"/packages"}>Please click here to choose a plan</Link>
        </div>
      )}
      {loading && (
        <Loader type="Rings" color="#00BFFF" height={60} width={60} />
      )}
      <Table>
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Rate / Frequency</Th>
            <Th>Current Period Start</Th>
            <Th>Next Payment</Th>
            <Th>Cancel</Th>
          </Tr>
        </Thead>
        <Tbody>
          {subscriptions.map((subscription, i) => (
            <Tr className={"mb"} key={i}>
              <Td>
                {data[env].packages.map((item,i) => {
                  return item.id === subscription.plan.id ? item.title : null
                })}
              </Td>
              <Td>
                ${subscription.plan.amount / 100} per{" "}
                {subscription.plan.interval}
              </Td>
              <Td>
                {moment
                  .unix(subscription.current_period_start)
                  .format("Do MMM  YY")}
              </Td>
              <Td>
              {moment.unix(subscription.current_period_end).format("Do MMM  YY")} 
                {" "}<small>({moment.unix(subscription.current_period_end).fromNow(true)})</small>
              </Td>
              <Td>
                <BrandButton
                  className={"red"}
                  onClick={() => pressDeleted(subscription.id)}
                >
                  <FiTrash2 color={"white"} />
                </BrandButton>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}

export default withAuthenticator(AuthSubscriptions)
