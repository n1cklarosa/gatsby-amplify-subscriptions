// import React from "react"
import styled from "styled-components"

const backgroundColor = "#ECEEF6"
const primary = "#247ba0"
// const secondary = "#70c1b3"
// const third = "#b2dbbf"
// const fourth = "#f3ffbd"
const highlight = "#ff1654"


export const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${primary};
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SiteFooter = styled.footer`

background-color: ${primary};
  width: 100%; 
`
export const HeaderCol = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
`
export const SiteBranding = styled.h1`
  color: white;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
`


export const PageLayout = styled.div`
  width: 100%;
  background-color: ${backgroundColor};
  padding-top: 90px;
`

export const PageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width:1320px;
  padding: 20px 20px 80px;
`


export const FormGroup = styled.div`
  margin-bottom: 30px;
  label {
  }
`

export const Input = styled.input`
  width: 100%;
  border: 0px solid transparent;
  border-bottom: 2px solid black;
  padding: 5px 0 5px;
`
export const Textarea = styled.textarea`
  width: 100%;
  border: 0px solid transparent;
  border-bottom: 2px solid black;
  padding: 5px 0 5px;
`

export const HomePageLeader = styled.div`
  // min-height: 60vh;
`

// export const HeaderComponent = styled.header`
//   margin: 1rem auto;
//   max-width: 960px;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 20px;
// `
// export const SiteBranding = styled.h1`
//   margin: 0.5rem 0;
// `

export const TransparentButton = styled.button`
  background-color: transparent;
  padding-left: 0;
  padding-right: 0;
  border: 0 solid transparent;
  cursor: pointer;
`

export const PageTitle = styled.h2`
  color: ${primary};
  margin-top: 0;
  text-align: center;
`
export const SectionTitle = styled.h3`
  color: ${primary};
  margin-top: 0;
  text-align: center;
`
// export const SiteFooter = styled.footer`
//   padding-top: 80px;
//   padding-bottom: 40px;
//   width: 100%;
//   background-color: #f4f4f4;
// `
export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  //   align-items: center;
  @media screen and (min-width: 960px) {
    // flex-wrap: nowrap;
    .item {
      width: 100%;
    }
  }
  &.mb {
    margin-bottom: 1rem;
  }
`

export const Item = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
  }
`

export const BrandButton = styled.button`
  box-shadow: none;
  &.red {
    background-color: ${highlight};
    border: 2px solid ${highlight};
  }
`

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const OptionContent = styled.div`
  text-align: left;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;
  div {
    text-align: left;
    flex: 1 0 auto;
    ul {
      font-style: italic;
      list-style-type: none;
    }
    p {
      margin-bottom: 30px;
    }
  }
`

export const Option = styled.div`
  box-sizing: border-box;
  flex-grow:1;
  display: flex;
  padding: 0.5em;
  width: 100%;
  h3 {
    margin-top: 0;
    color: ${primary};
  }
  h4 {
    margin-top: 0;
    color: ${highlight};
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 960px) {
    width: 33.3%;
  }
  @media screen and (min-width: 1024px) {
    width: 20%;
  }
`

export const BuyButton = styled.button`
  box-shadow: none;
  color: white;
  background-color: ${primary};
  border: 2px solid ${primary};
`


export const FormWrapper = styled.div`
  width:100%;
  padding:15px;
  border-radius:15px;
  background-color:white;
  form{
    max-width:100%;
    width:600px;
    margin:40px auto;
  }
 
`