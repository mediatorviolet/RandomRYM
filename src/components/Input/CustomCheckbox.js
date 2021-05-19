import React, {useState} from "react"
import styled from "styled-components"

const StyledCustomCheckbox = styled.input`
  opacity: 0;
  & + label {
    display: block;
    padding: 0.5rem 1rem;
    border: 2px solid #ae5975;
    border-radius: 20px;
    margin-right: 0.5rem;
    cursor: pointer;
    color: #ae5975;
  }

  &:checked + label {
    color: papayawhip;
    background-color: palevioletred;
  }
`

const CustomCheckbox = ({ handleChange, item, index }) => {
const [checked, setChecked] = useState([])

const handleCheck = e => {
  let checked = e.target.checked

  // Todo: try handling checkbox at checkbox level
}

  return (
    <>
      <StyledCustomCheckbox
        type='checkbox'
        id={index}
        onChange={handleChange}
        name={item}
        value={item}
        key={index}
      />
      <label htmlFor={index}>{item}</label>
    </>
  )
}

export default CustomCheckbox
