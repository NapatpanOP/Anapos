import React from 'react'
import "./ViuPosition.css"

function ViuPosition({selectPosHandle}) {
  return (
    <div class="full-size-viu">
      <div class="head-viu">
        <button class="viu-position1" onClick={() => selectPosHandle(0)}></button>
        <button class="viu-position2" onClick={() => selectPosHandle(1)}></button>
      </div>

      <h3 class="topic-viu">TOPIC</h3>
      <div class="box-viu-position1">
        <button class="viu-position3-1" onClick={() => selectPosHandle(2)}></button>
        <div class="viu-position"></div>
        <div class="viu-position"></div>
      </div>
      <div class="box-viu-position2">
        <div class="viu-position"></div>
        <div class="viu-position"></div>
        <div class="viu-position"></div>
      </div>
      <h3 class="topic-viu">Chinese Series - Thai Dubbed</h3>
      <div class="box-viu-position2">
        <div class="viu-position"></div>
        <div class="viu-position"></div>
        <div class="viu-position"></div>
      </div>
      <h3 class="topic-viu">TOPIC</h3>
      <div class="box-viu-position1">
        <button class="viu-position4-1" onClick={() => selectPosHandle(3)}></button>
        <div class="viu-position4-2"></div>
        <div class="viu-position4-2"></div>
      </div>
      <h3 class="topic-viu">Topnotch Romance</h3>
      <div class="box-viu-position2">
        <div class="viu-position"></div>
        <div class="viu-position"></div>
        <div class="viu-position"></div>
      </div>
    </div>
  )
}

export default ViuPosition
