import { useState } from "react"
import Profile from "./Components/profile"
import Form from "./Components/form"
import ReposList from "./Components/reposList"


function App() {
  const [formVisible, setVisibleForm] = useState(true)
  const [userName, setUserName] = useState('')
  return (
    <>
      <input type="text" onBlur={(e) => setUserName(e.target.value)} />

      {userName.length > 4 && (
      <>
          <Profile userName={userName}/> 
          <ReposList userName={userName}/>
      </>
    )}

{/* {formVisible && (
      <Form/>
    ) }
    <button onClick={() => setVisibleForm(!formVisible)} type="button">toggle form</button> */}
    </>
  )
}

export default App
