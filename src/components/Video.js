import React from 'react'

function Video({title, embedUrl, views, createdAt, upVotes, downVotes, handleClick}) {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <button id="upButton" name="upvotes" onClick={handleClick}>{upVotes}</button>
      <button id="downButton" name="downvotes" onClick={handleClick}>{downVotes}</button>
    </div>
  )
}

export default Video;