// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  height: 100vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`

export const CreditCardMainContainer = styled.div`
  background: #3b4b69;
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const CreditCardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const CreditCardMainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 5px;
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`

export const HorizontalLine = styled.hr`
  background: #ffd773;
  width: 200px;
  height: 3px;
  border-radius: 3px;
  margin-top: 5px;
  align-self: flex-start;
  margin-left: 0px;
  @media screen and (max-width: 767px) {
    width: 110px;
    height: 2px;
  }
`

export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 38px;
  height: 320px;
  width: 90%;
  border-radius: 25px;
  @media screen and (max-width: 767px) {
    height: 230px;
    margin-bottom: 30px;
    margin-top: 20px;
    padding-left: 30px;
  }
`
export const CreditCardNumber = styled.p`
  color: #ffffff;
  font-size: 35px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (max-width: 767px) {
    font-size: 23px;
  }
`

export const CreditCardNameHeading = styled.p`
  color: #d3d9e0;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

export const CreditCardUserName = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-top: 15px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

export const CreditCardDetailsInputContainer = styled.div`
  width: 30%;
  background: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const InputDetailsContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  height: 330px;
  width: 90%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin-top: 40px;
    height: 230px;
    margin-bottom: 20px;
  }
`

export const InputDetailsHeading = styled.h1`
  color: #3b4b69;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`

export const InputDetailsBox = styled.input`
  background: transparent;
  border-left: 1px solid #d3d9e0;
  border-right: 1px solid #d3d9e0;
  border-bottom: 1px solid #d3d9e0;
  border-top: none;
  height: 40px;
  width: 80%;
  margin-bottom: 20px;
  outline: none;
  padding-left: 8px;
  @media screen and (max-width: 767px) {
    height: 30px;
  }
`
