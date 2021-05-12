import { mainGenres } from "../data/tags"
import CustomCheckbox from "./Input/CustomCheckbox"

export default function Tags({ handleChange }) {
  return (
    <div className='list-container'>
      <h3>Exclude:</h3>
      <ul className='list-items'>
        {mainGenres.map((item, index) => (
          <li key={index} className='list-item'>
            <CustomCheckbox
              handleChange={handleChange}
              item={item}
              index={index}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
