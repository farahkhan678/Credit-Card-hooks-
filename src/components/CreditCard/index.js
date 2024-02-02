// Write your code here
import {useState} from 'react'
import {
  Container,
  CreditCardMainContainer,
  CreditCardHeadingContainer,
  CreditCardMainHeading,
  HorizontalLine,
  CreditCardContainer,
  CreditCardNumber,
  CreditCardNameHeading,
  CreditCardUserName,
  CreditCardDetailsInputContainer,
  InputDetailsContainer,
  InputDetailsHeading,
  InputDetailsBox,
} from './styledComponents'

const CreditCard = () => {
  const [creditCardNumber, onChangeNumber] = useState('')
  const [creditCardUserName, onChangeUserName] = useState('')

  const onChangeCreditCardNumber = event => onChangeNumber(event.target.value)

  const onGivenUserName = event => onChangeUserName(event.target.value)

  const userName = creditCardUserName.toUpperCase()

  return (
    <Container>
      <CreditCardMainContainer>
        <CreditCardHeadingContainer>
          <CreditCardMainHeading>CREDIT CARD</CreditCardMainHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CreditCardContainer data-testid="creditCard">
          <CreditCardNumber>{creditCardNumber}</CreditCardNumber>
          <CreditCardNameHeading>CARDHOLDER NAME</CreditCardNameHeading>
          <CreditCardUserName>{userName}</CreditCardUserName>
        </CreditCardContainer>
      </CreditCardMainContainer>
      <CreditCardDetailsInputContainer>
        <InputDetailsContainer>
          <InputDetailsHeading>Payment Method</InputDetailsHeading>
          <InputDetailsBox
            type="text"
            placeholder="Card Number"
            onChange={onChangeCreditCardNumber}
            value={creditCardNumber}
          />
          <InputDetailsBox
            type="text"
            placeholder="Cardholder Name"
            onChange={onGivenUserName}
            value={creditCardUserName}
          />
        </InputDetailsContainer>
      </CreditCardDetailsInputContainer>
    </Container>
  )
}
export default CreditCard
