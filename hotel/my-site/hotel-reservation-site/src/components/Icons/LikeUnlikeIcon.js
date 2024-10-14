import React from 'react';
import { FaHeart } from "react-icons/fa6";
import '../../styles/main.scss'
const LikeUnlikeIcon = (props) => {
  const{hendleLikeUnlikeClick} = props
  return (
    <div>
      
      <FaHeart onClick={(event)=>hendleLikeUnlikeClick(event)} className='like-unlike'>       
      
      </FaHeart>
    </div>
  )
}

export default LikeUnlikeIcon
