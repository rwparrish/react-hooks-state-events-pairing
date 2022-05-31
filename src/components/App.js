import { useState } from "react";
import video from "../data/video.js";
import CommentsList from "./CommentsList.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);

  const [videoInfo, setVideoInfo] = useState(video)

  const handleLikes = (e) => {

    const name = e.target.name
    const value = e.target.innerText++

    setVideoInfo({
      ...videoInfo,
      [name]: value
    })
    // if (e.target.id === "up") {
    //   const newUpVotes = e.target.innerText++
    //   setVideos({
    //     ...videos,
    //     upvotes: newUpVotes
    //   })
    // } 
    // const newDownVotes = e.target.innerText++
    // setVideos({
    //   ...videos,
    //   downvotes: newDownVotes
    // })
    
  }

  return (
    <div>
      <Video 
        title={video.title}
        embedUrl={video.embedUrl}
        views={video.views}
        createdAt={video.createdAt}
        upVotes={video.upvotes}
        downVotes={video.downvotes}
        handleClick={handleLikes}
      />
    <CommentsList comments={videoInfo.comments}/>
  </div>
    
  );
}

export default App;
