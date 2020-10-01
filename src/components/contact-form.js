import React, { useState } from "react"
import axios from "axios"
import Loader from "react-loader-spinner"
import {
  Input,
  Textarea,
  FormGroup,
  PageWrapper,
  // PageLayout,
  FormWrapper,
} from "../components/styled/global"

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const [loading, setLoading] = useState(false)
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setLoading(true)
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/ef4a1681-1b79-4abc-972b-2c545794d109",
      data: new FormData(form),
    })
      .then(r => {
        setLoading(false)
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <>
      <PageWrapper >
        <FormWrapper>
          <form onSubmit={handleOnSubmit}>
            <h3>Contact Nick</h3>
            <FormGroup>
              <Input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputName"
                placeholder="Name"
                required="required"
                aria-label="Enter your name"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="phone"
                className="form-control"
                id="exampleInputPhone"
                placeholder="Phone number (optional)"
                aria-label="Enter your phone number (optional)"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your email"
                aria-label="Enter your email address"
              />
            </FormGroup>
            <FormGroup>
              <Textarea
                placeholder="How can I help?"
                name="message"
                aria-label="How can I help?"
              />
            </FormGroup>
            <FormGroup>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={serverState.submitting}
                style={{ marginRight: "30px" }}
              >
                Submit
              </button>
              {loading && (
                <p>
                  <Loader type="Rings" color="#00BFFF" height={60} width={60} />
                </p>
              )}
              {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                  {serverState.status.msg}
                </p>
              )}
            </FormGroup>
          </form>
        </FormWrapper>
      </PageWrapper>
    </>
  )
}

export default ContactForm
