import styled from "styled-components"

const backgroundColor = "#ECEEF6"
const primary = "#247ba0"
// const secondary = "#70c1b3"
// const third = "#b2dbbf"
// const fourth = "#f3ffbd"
const highlight = "#ff1654"

export const AuthHeaderComponent = styled.header`
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
  max-width: 1320px;
  padding: 20px;
`

export const PageSection = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  margin-bottom:30px;
`
 
export const SectionTitle = styled.h3`
  color: ${primary};
  margin-top:0;
`