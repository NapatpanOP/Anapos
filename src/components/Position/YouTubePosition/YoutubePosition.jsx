import React from 'react'
import "./YoutubePosition.css"

function YoutubePosition({selectPosHandle, currentPositionIndex}) {

  return (
    <div class="full-size-youtube">
      <div  className="box-yt">
        <button class={[`box-yt-position1-1  ${
              currentPositionIndex == 0 ? "box-yt-position1-1-at" : "box-yt-position1-1"
            }`]} onClick={() => selectPosHandle(0)}></button>
        <div class="box-yt-position1-2"></div>
      </div>
      <h3 class="topic-yt">TOPIC</h3>
      <div class="box-yt-position">
        <button class={[`box-yt-position2-1  ${
              currentPositionIndex == 1 ? "box-yt-position2-1-at" : "box-yt-position2-1"
            }`]}  onClick={() => selectPosHandle(1)}></button>
        <div class="box-yt-position2-2"></div>
        <div class="box-yt-position2-2"></div>
        <div class="box-yt-position2-2"></div>
      </div>
      <h3 class="topic-yt">TOPIC</h3>
      <div class="box-yt-position">
        <button class={[`box-yt-position3-1  ${
              currentPositionIndex == 2 ? "box-yt-position3-1-at" : "box-yt-position3-1"
            }`]} onClick={() => selectPosHandle(2)}></button>
        <div class="box-yt-position3-2"></div>
        <div class="box-yt-position3-2"></div>
        <div class="box-yt-position3-2"></div>
      </div>
      <h3 class="topic-yt">TOPIC</h3>
      <div class="box-yt-position">
        <button class={[`box-yt-position4-1  ${
              currentPositionIndex == 3 ? "box-yt-position4-1-at" : "box-yt-position4-1"
            }`]}  onClick={() => selectPosHandle(3)}></button>
        <div class="box-yt-position4-2"></div>
        <div class="box-yt-position4-2"></div>
        <div class="box-yt-position4-2"></div>
      </div>
      <h3 class="topic-yt">TOPIC</h3>
      <div class="box-yt-position-end">
        <button class={[`box-yt-position5-1  ${
              currentPositionIndex == 4 ? "box-yt-position5-1-at" : "box-yt-position5-1"
            }`]} onClick={() => selectPosHandle(4)}></button>
        <div class="box-yt-position5-2"></div>
        <div class="box-yt-position5-2"></div>
        <div class="box-yt-position5-2"></div>
      </div>

    </div>
  )
}

export default YoutubePosition
