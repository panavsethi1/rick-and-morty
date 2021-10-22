import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Location } from "@gatsbyjs/reach-router"

export default function CharacterDetails({ data }) {
  const character = data.rickAndMorty.character
  console.log(data.rickAndMorty.character)
  return (
    <Layout>
      <div className="character-details">
        <div className="character-details__heading">
          <h1>{character.name}</h1>
        </div>
        <div className="character-details__content">
          <div className="character-details__content__image">
            <img loading="lazy" src={character.image} alt={character.name} />
          </div>
          <div className="character-details__content__text">
            <p>
              Status: <span>{character.status}</span>
            </p>
            <p>
              Species: <span>{character.species}</span>
            </p>
            <p>
              Gender: <span>{character.gender}</span>
            </p>
            <p>
              Origin: <span>{character.origin.name}</span>
            </p>
            <p>
              Last known location: <span>{character.location.name}</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query characterById($id: ID!) {
    rickAndMorty {
      character(id: $id) {
        gender
        image
        name
        location {
          dimension
          name
        }
        species
        status
        origin {
          name
          dimension
        }
      }
    }
  }
`
