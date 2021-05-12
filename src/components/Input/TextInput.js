import styled from "styled-components"

const StyledTextInput = styled.input`
  border: none;
  border-radius: 20px;
  padding: 1rem 2rem;
  background-color: lightgray;
`

const TextInput = ({ handleChange, name, placeholder = null }) => (
  <StyledTextInput type='text' onChange={handleChange} name={name} placeholder={placeholder} />
)

export default TextInput
