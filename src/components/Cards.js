import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likeCourses,setLikeCourses] = useState([]);

  // return you a list of all courses recieved from the api

  function getCourses(){
    if(category === "All"){
      let allCourse = [];
      Object.values(courses).forEach(array =>{
        array.forEach(courseData=>{
          allCourse.push(courseData);
        })
      })
      return allCourse;
    }
    else{
      // sirf specific category ka data paas hoga
      return courses[category];
    }
    
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
      getCourses().map((course) =>(
        <Card key={course.id} course = {course}
         likeCourses={likeCourses} 
         setLikeCourses ={setLikeCourses}/>
      ))
      }
    </div>
  )
}

export default Cards
