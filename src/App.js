  
import "./App.css";
import React, { useState } from "react";
import MovieList from "./component/MovieList";
import {  Form, FormControl, Button } from "react-bootstrap";
import Add from "./component/add";
import 'bootstrap/dist/css/bootstrap.min.css';



function App({movieList,setMovieList}) {
  const starList = [
    {
      id: 1,
      icon: "★",
      isColored: false,
    },
    {
      id: 2,
      icon: "★",
      isColored: false,
    },
    {
      id: 3,
      icon: "★",
      isColored: false,
    },
    {
      id: 4,
      icon: "★",
      isColored: false,
    },
    {
      id: 5,
      icon: "★",
      isColored: false,
    },
  ];

  const [tabStar, setTabStar] = useState(starList);

  const [search, setSearch] = useState("");

  const movieAdd = (title, src, rating, text) =>
    setMovieList([...movieList, { title, src, rating, text }]);
  const changeColor = (id) => {
    setTabStar(
      tabStar.map((el) =>
        el.id === id ? { ...el, isColored: !el.isColored } : el
      )
    );
  };
  return (
    
    <div className="App">
      <h1 style={{color:'white',fontFamily:'Abril Fatface' ,padding:'20px'}}>Movie app</h1>
      <div style={{display:'flex' ,justifyContent:'center'}}>
  <Form style={{display:'flex'}}>
  <Button variant="outline-info" style={{fontFamily:'Cookie',fontSize:'25px',borderRadius:' 10px'}}>Filter by title</Button>
      <FormControl onChange={(search) => setSearch(search.target.value)} type="text" placeholder="Search" style={{width:'50%'}} />'
      
    </Form>
 <Button variant="outline-info" style={{fontFamily:'Cookie',fontSize:'25px',borderRadius:' 10px'}}>Filter by rating</Button>
  {tabStar.map((star) => (
  
              <span className={star.isColored?"gold":"black"} onClick={() => changeColor(star.id)}>{star.icon}</span>
              
            ))}
   </div>
      <MovieList movieList={movieList} search={search} tabStar={tabStar} />
  
      <Add movieAdd={movieAdd} />
    </div>
  );
}

export default App;