import React, { useEffect, useState } from 'react'
import axios from 'axios'
import address from './address.svg'
import phone from './phone.svg'
import mail from './mail.svg'

const UserList = () => {

  const [listOfUser, setListOfUser] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setListOfUser(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="card_list">
    
  {listOfUser.map((el) =>( 
  <div className='card'>
  <h3>{el.name}</h3>
  <p>{el.username}</p>
  <p><img src={address} href='address'/>{el.address.city}-{el.address.street} {el.address.zipcode}</p>
  <a href='#'><img src={mail} href='mail'/>{el.email}</a>
  <p><img src={phone} href='phone'/>{el.phone}</p>
  </div>
  ))}
  </div>
  )
}

export default UserList
