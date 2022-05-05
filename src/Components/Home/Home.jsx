import React,{useState,useEffect} from 'react'
import {Table}from'react-bootstrap'
import axios from 'axios'
// const userData={
//   id:"",
//   name:'',
//   username:'',
//   email:''

// }

export default function Home() {
  
  const [user, setUser] = useState("");
  // const url="https://jsonplaceholder.typicode.com/users"

  const getAnswer = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    // const {data} = response.data;
    setUser(response);
  };

  useEffect(() => {
    getAnswer();
  }, []);
  console.log("fsdfdsfsdfffsd",)


  return (
    <div>
       <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th>User Name</th>
      <th>E-Mail</th>
      <th>Operation</th>
    </tr>
  </thead>
  <tbody>
  {Object.keys(user).map( (users,e) =>(
    <tr>
      {console.log(user)}
      <td key={e}> {users.id}</td>
      <td >{user.name}</td>
      <td >{user.username}</td>
      <td >{user.email}</td>
      <td >ghgjh</td>
    </tr>
    ))
  }
   
  </tbody>
</Table>
    </div>
  )
}
