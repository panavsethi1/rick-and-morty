const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query allCharacters {
      rickAndMorty {
        characters {
          results {
            id
            name
          }
        }
      }
    }
  `)

  data.rickAndMorty.characters.results.forEach(char => {
    actions.createPage({
      path: "/characters/" + char.name.toLowerCase().split(" ").join("-"),
      component: path.resolve("./src/templates/character-details.js"),
      context: { id: char.id },
    })
  })
}
