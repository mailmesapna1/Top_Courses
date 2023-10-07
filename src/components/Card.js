import React from 'react';
import {FcLike , FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likeCourses = props.likeCourses;
  let setLikeCourses = props.setLikeCourses;

  function clickHandler(){
    if(likeCourses.includes(course.id)){
      // pahle se hi like hai
      setLikeCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed");
    }
    else{
      // pahle se like nhi hai
      // insert karna h ye course liked courses me
      if(likeCourses.length === 0){
        setLikeCourses([course.id]);
      }else{
        // non-empty pahle se koi course like ho rakha hai
        setLikeCourses((prev) => [...prev,course.id]);

      }
      toast.success("Liked Successfully");
    }

  }


  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt="" />
  
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-9px] grid place-items-center'>
          <button onClick={clickHandler}>
            {
              likeCourses.includes(course.id) ?
              (<FcLike fontSize = "1.75rem" />):
              (<FcLikePlaceholder fontSize="1.75rem" />)
              
            }
            
          </button>
        </div>
      </div>
      <div className='0-4'>
        <p className='text-white font-semibold text-lg leading-6 ml-2'>{course.title}</p>
        <p className='mt-2 text-white ml-2'>
          {
            course.description.length>100 ?
            (course.description.substr(0,100))+"...":
            (course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card;
