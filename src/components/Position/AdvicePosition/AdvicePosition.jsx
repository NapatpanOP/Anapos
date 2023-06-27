import React from 'react'
import "./AdvicePosition.css"

function AdvicePosition({selectPosHandle}) {
  return (
    <div class="full-size-advice">
      <div class="box-av1">
        <div class="av-position1-1"></div>
        <div class="box-av1-1">
          <button class={[`av-position1 ${
              currentPositionIndex == 0 ? "av-position1-at" : "av-position1"
            }`]} onClick={() => selectPosHandle(0)}></button>
          <button class={[`av-position2 ${
              currentPositionIndex == 1 ? "av-position2-at" : "av-position2"
            }`]} onClick={() => selectPosHandle(1)}></button>
          <div class="box-av1-2">
            <button class={[`av-position3 ${
              currentPositionIndex == 2 ? "av-position3-at" : "av-position3"
            }`]} onClick={() => selectPosHandle(2)}></button>
          </div>
          <div class="box-av1-2">
            <div class="av-position3-1"></div>
            <div class="av-position3-1"></div>
          </div>
          <div class="box-av1-3">
            <div class="av-position3-2"></div>
            <div class="av-position3-2"></div>
            <button class={[`av-position4 ${
              currentPositionIndex == 3 ? "av-position4-at" : "av-position4"
            }`]} onClick={() => selectPosHandle(3)}></button>
          </div>
        </div>
      </div>

      <div class="av-position4-1"></div>

      <div class="av-box2">
        <div class="av-box2-1">
          <button class={[`av-position5 ${
              currentPositionIndex == 4 ? "av-position5-at" : "av-position5"
            }`]} onClick={() => selectPosHandle(4)}></button>
          <div class="av-position5-1"></div>
          <div class="av-position5-1"></div>
        </div>

        <div class="av-position5-2"></div>

        <div class="av-box2-1">
          <button class={[`av-position6 ${
              currentPositionIndex == 5 ? "av-position6-at" : "av-position6"
            }`]} onClick={() => selectPosHandle(5)}></button>
          <div class="av-position6-1"></div>
          <div class="av-position6-1"></div>
        </div>

        <div class="av-position6-2"></div>
        <div class="av-position6-2"></div>
        <div class="av-position6-2"></div>

        <div class="av-box2-1">
          <button class={[`av-position7 ${
              currentPositionIndex == 6 ? "av-position7-at" : "av-position7"
            }`]} onClick={() => selectPosHandle(6)}></button>
          <div class="av-position6-1"></div>
          <div class="av-position6-1"></div>
        </div>
      </div>
      
    </div>
  )
}

export default AdvicePosition
