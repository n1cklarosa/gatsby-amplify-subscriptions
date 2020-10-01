import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import { API, Auth } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
import Loader from "react-loader-spinner"
import moment from "moment-timezone"
import { SectionTitle } from "./styled/global"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import { FiDownload } from "react-icons/fi"

const AuthInvoices = ({user}) => {
  const [loading, setLoading] = useState(true)
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    loadInvoices()
  }, [user])

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
    // console.log("Chrges", subs)
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
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Total</Th>
            <Th>Download</Th>
          </Tr>
        </Thead>
        <Tbody> 
          {invoices.map((invoice, i) => (
          <Tr  key={i}>
            <Td>
              {moment
                .unix(invoice.created)
                .format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </Td>
            <Td>${invoice.amount_paid / 100}</Td>
            <Td>
              <a href={invoice.invoice_pdf} rel="noreferrer" target="_blank">
                <FiDownload />
              </a>
            </Td>
          </Tr>
        ))}
        </Tbody>
      </Table> 
    </div>
  )
}

export default withAuthenticator(AuthInvoices)
