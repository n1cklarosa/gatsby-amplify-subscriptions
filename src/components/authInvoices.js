import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import { API, Auth } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
import Loader from "react-loader-spinner"
import moment from "moment-timezone"
import { SectionTitle, FlexWrapper, ListWrapper } from "./styled/global"

const AuthInvoices = () => {
  const [loading, setLoading] = useState(true)
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    loadInvoices()
  }, [])

  const loadInvoices = async () => {
    const returnInvoices = async () => {
      const apiName = "stripeAPI"
      const apiEndpoint = `/user/${Auth.user.attributes["custom:stripe_id"]}/invoices`
      const subs = await API.get(apiName, apiEndpoint)
      setInvoices(subs.invoices.data)
      setLoading(false)
      return subs
    }

    var subs = await returnInvoices()
    console.log("Chrges", subs)
  }
  return (
    <div>
      <SectionTitle>Your Invoices</SectionTitle>
      {invoices.length === 0 && loading === false && (
        <div>No Invoices as yet</div>
      )}
      {loading && (
        <Loader type="Rings" color="#00BFFF" height={60} width={60} />
      )}

      <ListWrapper>
        {invoices.map((invoice, i) => (
          <FlexWrapper className={"mb"} key={i}>
            <div>
              {moment
                .unix(invoice.created)
                .format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </div>
            <div>${invoice.amount_paid / 100}</div>
            <div><a href={invoice.invoice_pdf} rel="noreferrer" target="_blank">Download</a></div>
          </FlexWrapper>
        ))}
      </ListWrapper>
    </div>
  )
}

export default withAuthenticator(AuthInvoices)
