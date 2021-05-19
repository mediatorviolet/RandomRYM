import React, { useState } from "react"
import "./App.css"
import Form from "./components/Form"
import GeneratedLink from "./components/GeneratedLink"
import Tags from "./components/Tags"
import Title from "./components/Titles/Title"
import { mainGenres } from "./data/tags"

function App() {
  const [formData, setFormData] = useState([])
  const [tags, setTags] = useState({})
  const [urlParams, setUrlParams] = useState(null)

  const handleFormChange = e => {
    let name = e.target.name
    let val = e.target.value

    setFormData({ ...formData, [name]: val })
  }

  const handleTagsChange = e => {
    let isChecked = e.target.checked
    let name = e.target.name

    setTags({ ...tags, [name]: isChecked })
  }

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

    const keys = Object.keys(tags)
    let activeTags = []

    keys.forEach(key => tags[key] === true && activeTags.push(key))

    setUrlParams({ year, position, page, activeTags })
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
          genres={urlParams.activeTags}
        />
      )}
    </div>
  )
}

export default App
