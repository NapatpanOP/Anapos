import React from 'react'
import "./YoutubePosition.css"

function YoutubePosition({selectPosHandle, currentPositionIndex}) {
  return (
    <div class="full-size-youtube">
      <div  className="box-yt">
        <button class={[`box-yt-position1-1  ${
              currentPositionIndex == 0 ? "class-active" : "class-normal"
            }`]} onClick={() => selectPosHandle(0)}></button>
        {/* <div class="box-yt-position1-1"></div> */}
        <div class="box-yt-position1-2"></div>
      </div>
      <h3 class="topic-yt">TOPIC</h3>
      <div class="box-yt-position">
        <button class="box-yt-position2-1" onClick={() => selectPosHandle(1)}></button>
        {/* <div class="box-yt-position2-1"></div> */}
        <div class="box-yt-position2-2"></div>
        <div class="box-yt-position2-2"></div>
      </div>
      <h3 class="topic-yt">TOPIC</h3>
      <div class="box-yt-position">
        <button class="box-yt-position3-1" onClick={() => selectPosHandle(2)}></button>
        {/* <div class="box-yt-position3-1"></div> */}
        <div class="box-yt-position3-2"></div>
        <div class="box-yt-position3-2"></div>
      </div>
      <h3 class="topic-yt">TOPIC</h3>
      <div class="box-yt-position">
        <button class="box-yt-position4-1" onClick={() => selectPosHandle(3)}></button>
        {/* <div class="box-yt-position4-1"></div> */}
        <div class="box-yt-position4-2"></div>
        <div class="box-yt-position4-2"></div>
      </div>
      <h3 class="topic-yt">TOPIC</h3>
      <div class="box-yt-position-end">
        <button class="box-yt-position5-1" onClick={() => selectPosHandle(4)}></button>
        {/* <div class="box-yt-position5-1"></div> */}
        <div class="box-yt-position5-2"></div>
        <div class="box-yt-position5-2"></div>
      </div>

    </div>
  )
}

export default YoutubePosition
