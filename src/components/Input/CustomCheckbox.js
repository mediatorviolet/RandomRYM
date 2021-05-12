import React from "react"
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
  }

  &:checked + label {
    color: white;
    background-color: palevioletred;
  }
`

const CustomCheckbox = ({ handleChange, item, index }) => {
  return (
    <>
      <StyledCustomCheckbox
        type='checkbox'
        id={index}
        onChange={handleChange}
        value={item}
        key={index}
      />
      <label htmlFor={index}>{item}</label>
    </>
  )
}

export default CustomCheckbox
