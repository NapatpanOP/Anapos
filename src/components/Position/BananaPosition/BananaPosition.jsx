import React from 'react'
import "./BananaPosition.css"

function BananaPosition({selectPosHandle}) {
  return (
    <div class="full-size-banana">
      <button class="bn-position1" onClick={() => selectPosHandle(0)}></button>
      
      <div class="bn-position1-1"></div>

      <button class="bn-position2" onClick={() => selectPosHandle(1)}></button>

      <div class="box-banana1">
        <div class="box-banana1-1">
          <h3>TOPIC</h3>
          <div class="box-banana1-2">
            <button class="bn-position3" onClick={() => selectPosHandle(2)}></button>
            <div class="bn-position3-1"></div>
            <div class="bn-position3-1"></div>
          </div>
        </div>

        <div class="box-banana1-1">
          <h3>TOPIC</h3>
          <div class="box-banana1-2">
            <button class="bn-position4" onClick={() => selectPosHandle(3)}></button>
            <div class="bn-position4-1"></div>
            <div class="bn-position4-1"></div>
            <div class="bn-position4-1"></div>
          </div>
        </div>

        <div class="box-banana2-1">
          <button class="bn-position5" onClick={() => selectPosHandle(4)}></button>
          <div class="box-banana2-2">
            <button class="bn-position6" onClick={() => selectPosHandle(5)}></button>
            <button class="bn-position7" onClick={() => selectPosHandle(6)}></button>
          </div>
        </div>

        <div class="box-banana1-1">
          <h3>TOPIC</h3>
          <div class="box-banana1-2">
            <div class="bn-position4-1"></div>
            <div class="bn-position4-1"></div>
            <div class="bn-position4-1"></div>
            <div class="bn-position4-1"></div>
          </div>
        </div>

        <div class="box-banana1-1">
          <h3>TOPIC</h3>
          <div class="box-banana1-2">
            <div class="bn-position4-1"></div>
            <div class="bn-position4-1"></div>
            <div class="bn-position4-1"></div>
            <div class="bn-position4-1"></div>
          </div>
        </div>

        <div class="box-banana1-1">
          <h3>TOPIC</h3>
          <div class="box-banana1-2">
            <button class="bn-position8" onClick={() => selectPosHandle(7)}></button>
            <div class="bn-position3-1"></div>
            <div class="bn-position3-1"></div>
          </div>
        </div>

        <div class="box-banana1-1">
          <h3>TOPIC</h3>
          <div class="box-banana1-2">
            <button class="bn-position9" onClick={() => selectPosHandle(8)}></button>
            <div class="bn-position3-1"></div>
            <div class="bn-position3-1"></div>
          </div>
        </div>

        <div class="box-banana1-1">
          <h3>TOPIC</h3>
          <div class="box-banana1-2">
            <button class="bn-position10" onClick={() => selectPosHandle(9)}></button>
            <div class="bn-position3-1"></div>
            <div class="bn-position3-1"></div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default BananaPosition
