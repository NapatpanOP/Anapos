import React from "react";
import "./ThaiRathPosition.css";

function ThaiRathPosition({selectPosHandle}) {
  return (
    <div class="full-size-thairath">
      <button class="tr-position1" onClick={() => selectPosHandle(0)}></button>

      <div class="box-tr2">
        <div class="tr-position1-1"></div>
        <div class="tr-position1-1"></div>
      </div>

      <div class="box-tr3">
        <div class="tr-position1-2"></div>
        <div class="box-tr3-1">
          <button class="tr-position2" onClick={() => selectPosHandle(1)}></button>
          <div class="tr-position2-1"></div>
        </div>
      </div>

      <div class="box-tr4">
        <div class="tr-position3-1"></div>
        <button class="tr-position3" onClick={() => selectPosHandle(2)}></button>
      </div>

      <div class="box-tr5">
        <h3 class="topic-thairath">Special report</h3>
        <div class="box-tr5-1">
          <div class="tr-position3-2"></div>
          <div class="tr-position3-2"></div>
          <div class="tr-position3-2"></div>
        </div>
      </div>

      <div class="box-tr6">
        <button class="tr-position4" onClick={() => selectPosHandle(3)}></button>
      </div>

      <div class="box-tr7">
        <div class="tr-position4-1"></div>
        <div class="box-tr7-1">
          <div class="tr-position4-2"></div>
          <div class="tr-position4-2"></div>
          <div class="tr-position4-2"></div>
          <div class="tr-position4-2"></div>
        </div>
      </div>

      <div class="box-tr6">
        <div class="tr-position4-3"></div>
      </div>

      <div class="box-tr8">
        <div class="box-tr8-1">
          <div class="tr-position5-1"></div>
          <div class="box-tr8-2">
            <div class="tr-position5-2"></div>
            <button class="tr-position5" onClick={() => selectPosHandle(4)}></button>
          </div>
        </div>
      </div>

      <div class="box-tr6">
        <div class="tr-position5-3"></div>
      </div>

      <div class="box-tr9">
        <h3 class="topic-thairath">Thai Rath Gallery</h3>
        <div class="box-tr5-1">
          <div class="tr-position3-2"></div>
          <div class="tr-position3-2"></div>
          <div class="tr-position3-2"></div>
        </div>
      </div>

      <div class="box-tr10">
        <button class="tr-position6" onClick={() => selectPosHandle(5)}></button>
        <button class="tr-position7" onClick={() => selectPosHandle(6)}></button>
      </div>

    </div>
  );
}

export default ThaiRathPosition;
