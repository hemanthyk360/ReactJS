import React from 'react';
import './App.css';
import Blogcards from './Blogcard';

// import BlogHomepageCard from './Blogcards';
function App() {
  const blogObj = {
    title:"Blog Title Main",
    description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
  }

  const blogArr=[
    {
      id:1,
      title:"Blog Title 1",
      description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
      id:2,
      title:"Blog Title 2",
      description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    },
    {
      id:3,
      title:"Blog Title 3",
      description: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor"
    }
  ]

  const blogcards=blogArr.map((item,pos)=>{
      console.log(item);

      return(
        // if id is not there then pass the value as pos which is defined as second argument in map function
          // <div className="Blogcard" key={item.id}> 
          //   <h3> {item.title} </h3>
          //   <p> {item.description} </p> </div>

         // you will be getting all the object inside blogArr hence it will get displayed 3 times 
        <Blogcards key={pos} id={item.id} title={item.title} description={item.description}/>
        //if we do not have key then you will be getting warning so to avoid the same 
        // we have to pass the second argument 

        // now if i want to make all the objects from blogArr then change the above properties by 
        // calling item.title and item.description.




        //<BlogHomepageCard key={pos} id={item.id} title={item.title} description={item.description}/>
      )
  })

  return (
    <div className="App">
      <div className="Blogcard">
    <h3> {blogObj.title} </h3>
  <p> {blogObj.description} </p> </div>    

     {blogcards}
  </div>
  );
}

export default App;

