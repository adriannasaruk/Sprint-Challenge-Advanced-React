import React from 'react';
import './App.css';
import axios from "axios";
import Nav from "./Nav";
import styled from "styled-components"


const Card = styled.div`
border: 2px solid lightblue;
width: 23%;
margin: 10px;
`

const Main = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content center;
width: 95%;
margin: 0 auto;
`


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: []
  }
 
  }
  
  componentDidMount () {
    axios.get("http://localhost:5000/api/players")
    .then(res => {
      console.log(res.data)
      this.setState ({
        data: res.data
      })
      
    })
    .catch (err => console.log (err.message))
  }


  render(){
    return (
      <div className="body">
        <Nav />
        <Main>
          {this.state.data.map(item => (
            
          <Card>
          <h2>Name: {item.name}</h2>
          <p>Country: {item.country}</p>
          <p>Searches: {item.searches}</p>
          <p>Id: {item.id}</p>
          </Card>
          
        ))}
        </Main>
      </div>
    );
  }
  }
  

export default App;
