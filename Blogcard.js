import React from 'react';

// you can pass anything inside the blogcard method as a parameter but as a standard form 
// we will have as prop
const blogcard = (props) => {
    console.log(props)
    return(
       //remove item.id and put some static data
          <div className="Blogcard">  
            <h3> Blog Title </h3>
            <p> Blog Description </p> </div>
// if we do not specify the props then it will be static component
// React.createElement("div", {
//     className: "Blogcard"
//   }, /*#__PURE__*/React.createElement("h3", null, props.title, " "), /*#__PURE__*/React.createElement("p", null, " ", props.description, " "), " "));
      
)}
export default blogcard; //static component 
