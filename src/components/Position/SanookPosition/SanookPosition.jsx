import React from "react";
import "./SanookPosition.css";

function SanookPosition({selectPosHandle}) {
  return (
    <div class="full-size-sanook">
      <div class="head-box-sanook">
        <h3 class="topic-sanook">TOPIC</h3>
        <div class="box-sn-1">
          <button class="box-position-sn1" onClick={() => selectPosHandle(0)}></button>
          <div class="box-position-sn1-1"></div>
        </div>
      </div>

      <div class="box-sn-2-1">
        <div class="box-position-sn2-1"></div>
        <button class="box-position-sn2" onClick={() => selectPosHandle(1)}></button>
      </div>

      <div class="box-sn-2-2">
        <div class="box-position-sn2-2"></div>
      </div>

      <div class="box-sn-3-1">
        <div class="box-position-sn3-1"></div>
        <button class="box-position-sn3" onClick={() => selectPosHandle(2)}></button>
        <button class="box-position-sn4" onClick={() => selectPosHandle(3)}></button>
      </div>

      <h3 class="topic-sanook-5">Sports-Football</h3>
      <div class="box-sn-5">
        <div class="box-sn5-1">
          <div class="box-position-sn5-1"></div>
          <button class="box-position-sn6" onClick={() => selectPosHandle(4)}></button>
        </div>
        <div class="box-position-sn5-2"></div>
        <button class="box-position-sn5" onClick={() => selectPosHandle(5)}></button>
      </div>

      <div class="box-sn-6">
        <div class="box-sn-6-1">
          <h3 class="topic-sanook-5">Lifestyle</h3>
          <div class="box-sn-position-6-1">
            <div class="box-position-sn6-1"></div>
            <div class="box-position-sn6-1"></div>
            <div class="box-position-sn6-1"></div>
            <div class="box-position-sn6-1"></div>
          </div>
        </div>
        <div class="box-sn-6-1">
          <h3 class="topic-sanook-5">Games-IT-Car</h3>
          <div class="box-sn-position-6-1">
            <div class="box-position-sn6-1"></div>
            <div class="box-position-sn6-1"></div>
            <button class="box-position-sn7" onClick={() => selectPosHandle(6)}></button>
          </div>
        </div>
      </div>

      <h3 class="topic-sanook-5">Video Clip</h3>
      <div class="box-sn-position-6-1">
        <div class="box-position-sn6-1"></div>
        <div class="box-position-sn6-1"></div>
        <div class="box-position-sn6-1"></div>
        <div class="box-position-sn6-1"></div>
      </div>
    </div>
  );
}

export default SanookPosition;