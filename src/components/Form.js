import SumbitBtn from "./Button/SubmitBtn"
import DivJustifyCenter from "./Container/DivJustifyCenter"
import InputGroup from "./Container/InputGroup"
import TextInput from "./Input/TextInput"

export default function Form({ children, handleChange, handleSubmit }) {
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="startYear">
            <TextInput
              handleChange={handleChange}
              name='startYear'
              placeholder='Année de début'
            />
          </label>
        </InputGroup>
        <InputGroup>
          <label htmlFor="endYear">
            <TextInput
              handleChange={handleChange}
              name='endYear'
              placeholder='Année de fin'
            />
          </label>
        </InputGroup> 
        <>{children}</>
        <DivJustifyCenter>
          <SumbitBtn text='Générer' />
        </DivJustifyCenter>
      </form>
    </div>
  )
}
