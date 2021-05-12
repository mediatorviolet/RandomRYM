import React, { useState } from "react"
import "./App.css"
import Form from "./components/Form"
import GeneratedLink from "./components/GeneratedLink"
import Tags from "./components/Tags"
import Title from "./components/Titles/Title"
import { mainGenres } from "./data/tags"

function App() {
  const [formData, setFormData] = useState([])
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [urlParams, setUrlParams] = useState()

  const handleFormChange = e => {
    let name = e.target.name
    let val = e.target.value

    setFormData({ ...formData, [name]: val })
  }

  // Todo: toggle tags
  const handleTagsChange = e => {
    let id = e.target.id
    let val = e.target.value
    let isChecked = e.target.checked

    setTags(() => {
      let i = tags.indexOf(val)
      if (i === -1) {
        return [...tags, val]
      } else {
        return [...tags.splice(i, 1)]
      }
    })
  }
  console.log("tags", tags)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)

    // Todo: find a better way to convert year to INT
    generateLink(formData.startYear * 1, formData.endYear * 1)
    console.log(urlParams)
  }

  const generateLink = (startYear, endYear) => {
    let position = Math.floor(Math.random() * 1001)
    let page = Math.ceil(position / 40)
    let year = Math.floor(Math.random() * (endYear - startYear + 1) + startYear)

    setUrlParams({ year, position, page, tags })
  }

  return (
    <div className='App'>
      <Title>Random RYM</Title>
      <Form handleChange={handleFormChange} handleSubmit={handleSubmit}>
        <Tags handleChange={handleTagsChange} />
      </Form>
      {urlParams && (
        <GeneratedLink
          year={urlParams.year}
          page={urlParams.page}
          position={urlParams.position}
          genres={urlParams.tags}
        />
      )}
    </div>
  )
}

export default App
