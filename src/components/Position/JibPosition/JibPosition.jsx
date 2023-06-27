import React from "react";
import "./JibPosition.css";

function JibPosition({selectPosHandle}) {
  return (
    <div class="full-size-jib">
      <div class="box-jib1">
        <div class="jb-positon1-1"></div>
        <button class={[`jb-positon1 ${
              currentPositionIndex == 0 ? "jb-positon1-at" : "jb-positon1"
            }`]} onClick={() => selectPosHandle(0)}></button>
        <button class={[`jb-positon2 ${
              currentPositionIndex == 1 ? "jb-positon2-at" : "jb-positon2"
            }`]} onClick={() => selectPosHandle(1)}></button>
        <div class="box-jib1-1">
          <button class={[`jb-positon3 ${
              currentPositionIndex == 2 ? "jb-positon3-at" : "jb-positon3"
            }`]} onClick={() => selectPosHandle(2)}></button>
          <div class="jb-positon3-1"></div>
        </div>
      </div>

      <div class="jb-positon3-2"></div>

      <button class={[`jb-positon4 ${
              currentPositionIndex == 3 ? "jb-positon4-at" : "jb-positon4"
            }`]} onClick={() => selectPosHandle(3)}></button>

      <div class="box-jib1">
        <div class="box-jib2-1">
          <button class={[`jb-positon5 ${
              currentPositionIndex == 4 ? "jb-positon5-at" : "jb-positon5"
            }`]} onClick={() => selectPosHandle(4)}></button>
          <div class="jb-positon5-1"></div>
          <div class="jb-positon5-1"></div>
        </div>
        <div class="box-jib2-2">
          <div class="box-jib2-3">
            <button class={[`jb-positon6 ${
              currentPositionIndex == 5 ? "jb-positon6-at" : "jb-positon6"
            }`]} onClick={() => selectPosHandle(5)}></button>
            <div class="jb-positon6-1"></div>
            <div class="jb-positon6-1"></div>
          </div>
          <div class="jb-positon6-2"></div>
        </div>
      </div>

      <button class={[`jb-positon7 ${
              currentPositionIndex == 6 ? "jb-positon7-at" : "jb-positon7"
            }`]} onClick={() => selectPosHandle(6)}></button>

      <div class="box-jib1">
        <div class="box-jib2-1">
          <button class={[`jb-positon8 ${
              currentPositionIndex == 7 ? "jb-positon8-at" : "jb-positon8"
            }`]} onClick={() => selectPosHandle(7)}></button>
          <div class="jb-positon8-1"></div>
          <div class="jb-positon8-1"></div>
        </div>
        <div class="box-jib3-2">
          <h3 class="topic-jib3">NEW PRODUCTS</h3>
          <div class="jb-positon8-2"></div>
          <h3 class="topic-jib3">BEST SELLER</h3>
          <div class="jb-positon8-2"></div>
          <h3 class="topic-jib3">RECOMMENDED</h3>
          <div class="jb-positon8-2"></div>
        </div>
      </div>

      <div class="box-jib1">
        <button class={[`jb-positon9 ${
              currentPositionIndex == 8 ? "jb-positon9-at" : "jb-positon9"
            }`]} onClick={() => selectPosHandle(8)}></button>
        <div class="jb-positon9-1"></div>
        <div class="jb-positon9-1"></div>
      </div>
    </div>
  );
}

export default JibPosition;
