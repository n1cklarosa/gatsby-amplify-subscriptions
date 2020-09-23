import React from "react"
import styled from "styled-components"

export const HeaderComponent = styled.header`
  margin: 1rem auto;
  max-width: 960px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`
export const SiteBranding = styled.h1`
  margin: 0.5rem 0;
`

export const TransparentButton = styled.button`
  background-color: transparent;
  padding-left: 0;
  padding-right: 0;
  border: 0 solid transparent;
  cursor: pointer;
`

export const PageTitle = styled.h2``
export const SectionTitle = styled.h3``
export const SiteFooter = styled.footer`
  padding-top: 80px;
  padding-bottom: 40px;
  width: 100%;
  background-color: #f4f4f4;
`
export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
  &.mb {
    margin-bottom: 1rem;
  }
`
export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
