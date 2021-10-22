import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

export default function CharacterComponent({ data }) {
  return (
    <div className="character">
      <div className="character__img">
        <img loading="lazy" src={data.image} alt={data.name}></img>
      </div>
      <div className="character__data">
        <p className="character__data__name">{data.name}</p>
        <p>
          Status: <span>{data.status}</span>
        </p>
        <p>
          Species: <span>{data.species}</span>
        </p>
        <p>
          Gender: <span>{data.gender}</span>
        </p>
      </div>
    </div>
  )
}
