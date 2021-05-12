import styled from "styled-components"

const StyledSubmitBtn = styled.button`
  padding: 0.75rem 1.5rem;
  background: palevioletred;
  border: 2px solid #ae5975;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`
const SubmitBtn = ({ text }) => (
  <StyledSubmitBtn type='submit'>{text}</StyledSubmitBtn>
)

export default SubmitBtn
