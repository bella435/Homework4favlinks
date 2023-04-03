import { useState } from 'react'

import Table from './Table';
 import Form from './Form';

const LinkContainer = (props) => {
  const [favLinks, setFavLinks] = useState([
    {
      name: 'Google',
      URL: 'https://www.google.com',
    },
    {
      name: 'Facebook',
      URL: 'https://www.facebook.com',
    },
    {
      name: 'Twitter',
      URL: 'https://www.twitter.com',
    },
  ])
  
  const removeLink = (index) => {
    const newFavLinks = [...favLinks]
    newFavLinks.splice(index, 1)
    setFavLinks(newFavLinks)
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  const handleSubmit = (favLink) => {
    setFavLinks([...favLinks, favLink])
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      
      {/*TODO - Add Table Component */}
      <Table linkData={favLinks} removeLink={removeLink} />
      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      <Form handleSubmit={handleSubmit} />
       
    </div>
  )
}

export default LinkContainer
