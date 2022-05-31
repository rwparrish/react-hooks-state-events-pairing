import React from 'react'
import { useState } from 'react'
import Comment from './Comment'

function CommentsList({comments}) {

  const [displayComments,  setDisplayComments] = useState(true) 


  const commentsToDisplay = comments.map((commentObj) => {
      return <Comment key={commentObj.id} text={commentObj.comment} user={commentObj.user}/>
  })  

  const handleClick = () => {
    setDisplayComments((displayComments) => !displayComments)
  }

  const btnText = displayComments ? "Hide Comments" : "Show Comments"

   return (
    <div>
        <button onClick={handleClick}>{btnText}</button>
        {displayComments ? commentsToDisplay : null}
    </div>
  )
}

export default CommentsList