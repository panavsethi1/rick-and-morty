import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import CharacterComponent from "../components/CharacterComponent"
import axios from "axios"

export default function Characters() {
  const [data, setData] = useState()
  const [keyword, setKeyword] = useState("")
  const [pageNumber, setPageNumber] = useState(1)
  const [isNoResults, setIsNoResults] = useState(false)

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${keyword}`
      )
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [pageNumber, keyword])

  const handlePrev = () => {
    if (data.info.prev !== null) {
      setPageNumber(pageNumber - 1)
    }
  }

  const handleNext = () => {
    if (data.info.next !== null) {
      setPageNumber(pageNumber + 1)
    }
  }

  return (
    <Layout>
      <div className="characters">
        <div className="characters__heading">
          <h1>Characters</h1>
          <div className="characters__heading__filter">
            <input
              type="search"
              placeholder="Search"
              value={keyword}
              onChange={e => {
                setKeyword(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="characters__table">
          {data &&
            data.results.map(char => {
              return (
                <Link
                  to={char.name.toLowerCase().split(" ").join("-")}
                  key={char.id}
                  state={{ id: char.id }}
                >
                  <CharacterComponent data={char} />
                </Link>
              )
            })}
        </div>
        <div className="characters__paginator">
          <p>
            <span onClick={handlePrev}>&laquo;</span>
            <span>{pageNumber}</span>
            <span onClick={handleNext}>&raquo;</span>
          </p>
        </div>
      </div>
    </Layout>
  )
}
