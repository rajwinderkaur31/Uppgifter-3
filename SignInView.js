import   { useState } from 'react'



export const SignInView = () => {
    const [username, setUsername] =useState('Rajwinder')
    const [password, setPassword] = useState('')

    const saveDataToBrowser = () => {
        localStorage.setItem('username', 'rajwinder')
    }

   const removeDataFromBrowser = () => {
       localStorage.removeItem('username')
   }

    return (
        <div>
        <h1>{username}</h1>
        <span>Username: </span> <input onChange={event => setUsername(event.target.value)}/> <br></br>
        <span>password: </span> <input onChange={event => setPassword(event.target.value)}/>
        <button onClick={() => saveDataToBrowser()}>SaveDataToBrowser</button>
       <button onClick={() => removeDataFromBrowser()}>RemoveDataFromBrowser</button>
    </div>
    )  
}  
 
    


}