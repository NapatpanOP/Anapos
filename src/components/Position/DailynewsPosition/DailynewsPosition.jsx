import React from 'react'
import "./DailynewsPosition.css"

function DailynewsPosition({selectPosHandle}) {
  return (
    <div class="full-size-dailynews">
      <div class="head-box-dailynews">
        <div class="box-position-dn1-1"></div>
        <button class={[`box-position-dn1 ${
              currentPositionIndex == 0 ? "box-position-dn1-at" : "box-position-dn1"
            }`]} onClick={() => selectPosHandle(0)}></button>
        <div class="box-position-dn1-1"></div>
      </div>

      <div class="box-dailynews-2">
        <h3 class="topic-dailynews-color">Latest news</h3>
        <div class="box-dailynews-2-1">
          <div class="box-position-dn1-2"></div>
          <div class="box-position-dn1-2"></div>
          <div class="box-position-dn1-2"></div>
          <div class="box-position-dn1-2"></div>
        </div>
      </div>

      <div class="box-dailynews-3">
        <h3 class="topic-dailynews-3">TOPIC</h3>
        <div class="box-dailynews-3-1">
          <div class="box-position-dn1-3"></div>
          <div class="box-position-dn1-3"></div>
          <div class="box-position-dn1-3"></div>
        </div>
      </div>

      <div class="box-dailynews-4">
        <h3 class="topic-dailynews-color-4">Highlights</h3>
        <div class="box-dailynews-4-1">
          <div class="box-position-dn1-4"></div>
          <div class="box-dailynews-4-2">
            <div class="box-position-dn1-5"></div>
            <div class="box-position-dn1-5"></div>
            <div class="box-position-dn1-5"></div>
            <div class="box-position-dn1-5"></div>
          </div>
        </div>
      </div>

      <div class="box-dailynews-4">
        <h3 class="topic-dailynews-color-5">TOPIC</h3>
        <div class="box-dailynews-4-1">
          <button class={[`box-position-dn2 ${
              currentPositionIndex == 1 ? "box-position-dn2-at" : "box-position-dn2"
            }`]} onClick={() => selectPosHandle(1)}></button>
          <div class="box-dailynews-5-2">
            <h5>Title</h5>
            <p>Text</p>
          </div>
        </div>
      </div>

      <div class="box-dailynews-4">
        <h3 class="topic-dailynews-color-5">TOPIC</h3>
        <div class="box-dailynews-4-1">
          <button class={[`box-position-dn3 ${
              currentPositionIndex == 2 ? "box-position-dn3-at" : "box-position-dn3"
            }`]} onClick={() => selectPosHandle(2)}></button>
          <div class="box-position-dn3-1"></div>
          <div class="box-position-dn3-1"></div>
        </div>
      </div>

      <div class="box-dailynews-4">
        <h3 class="topic-dailynews-color-5">TOPIC</h3>
        <div class="box-dailynews-4-1">
          <button class={[`box-position-dn4 ${
              currentPositionIndex == 3 ? "box-position-dn4-at" : "box-position-dn4"
            }`]} onClick={() => selectPosHandle(3)}></button>
          <div class="box-position-dn3-1"></div>
          <div class="box-position-dn3-1"></div>
        </div>
      </div>

      <div class="box-dailynews-5">
        <button class={[`box-position-dn5 ${
              currentPositionIndex == 4 ? "box-position-dn5-at" : "box-position-dn5"
            }`]} onClick={() => selectPosHandle(4)}></button>
        <h4 class="topic-daiynews-5">TOPIC</h4>
      </div>

      <div class="box-dailynews-6"></div>

      <div class="box-dailynews-7">
        <div class="box-dailynews-3-1">
          <button class={[`box-position-dn6 ${
              currentPositionIndex == 5 ? "box-position-dn6-at" : "box-position-dn6"
            }`]} onClick={() => selectPosHandle(5)}></button>
          <div class="box-position-dn6-1"></div>
          <div class="box-position-dn6-1"></div>
          <div class="box-position-dn6-1"></div>
        </div>
      </div>

      <div class="box-dailynews-8">
        <h3 class="topic-dailynews-3">TOPIC</h3>
        <div class="box-dailynews-3-1">
          <button class={[`box-position-dn7 ${
              currentPositionIndex == 6 ? "box-position-dn7-at" : "box-position-dn7"
            }`]} onClick={() => selectPosHandle(6)}></button>
          <div class="box-position-dn6-1"></div>
          <div class="box-position-dn6-1"></div>
          <div class="box-position-dn6-1"></div>
        </div>
      </div>

      <div class="box-dailynews-9"></div>
      
    </div>
  )
}

export default DailynewsPosition
