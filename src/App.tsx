import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { Event } from "./pages/Event";


const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`

function App() {

  const {data} = useQuery(GET_LESSONS_QUERY);
  console.log(data)

  return (
    <Event />
  )
}

export default App
