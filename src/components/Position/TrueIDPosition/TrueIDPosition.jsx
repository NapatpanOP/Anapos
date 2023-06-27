import React from "react";
import "./TrueIDPosition.css";

function TrueIDPosition({selectPosHandle}) {
  return (
    <div class="full-size-trueid">
      <div class="box-head-trueid">
        <div class="box-trueid1"></div>
        <button class={[`head-trueid ${
              currentPositionIndex == 0 ? "head-trueid-at" : "head-trueid"
            }`]}  onClick={() => selectPosHandle(0)}></button>
        <div class="box-trueid1"></div>
        <div class="box-trueid1-1"></div>
      </div>

      <div class="box-truid-1">
        <h3 class="topic-trueid">Trending TV Program</h3>
        <div class="box-trueid-1-1">
          <div class="box-trueid-1-2"></div>
          <div class="box-trueid-1-2"></div>
          <div class="box-trueid-1-2"></div>
          <div class="box-trueid-1-2"></div>
        </div>
        <h3 class="topic-trueid">Let’s Watch</h3>
        <div class="box-trueid-1-1">
          <div class="box-trueid-1-1-2"></div>
          <div class="box-trueid-1-1-2"></div>
          <div class="box-trueid-1-1-2"></div>
          <div class="box-trueid-1-1-2"></div>
        </div>
      </div>

      <div class="box-truid-2">
        <h3 class="topic-trueid">Let’s Eat</h3>
        <div class="box-trueid-2-1">
          <div class="box-trueid-1-3"></div>
        </div>
      </div>

      <div class="box-truid-3">
        <h3 class="topic-trueid">TOPIC</h3>
        <div class="box-truid-3-1">
          <button class={[`trueid-ps-2 ${
              currentPositionIndex == 1 ? "trueid-ps-2-at" : "trueid-ps-2"
            }`]} onClick={() => selectPosHandle(1)}></button>
          <div class="trueid-ps-2-1"></div>
          <div class="trueid-ps-2-1"></div>
          <div class="trueid-ps-2-1"></div>
          <div class="trueid-ps-2-1"></div>
          <div class="trueid-ps-2-1"></div>
          <div class="trueid-ps-2-1"></div>
        </div>
      </div>

      <div class="box-truid-3">
        <h3 class="topic-trueid">TOPIC</h3>
        <div class="box-truid-3-1">
          <button class={[`trueid-ps-3 ${
              currentPositionIndex == 2 ? "trueid-ps-3-at" : "trueid-ps-3"
            }`]} onClick={() => selectPosHandle(2)}></button>
          <div class="trueid-ps-3-1"></div>
          <div class="trueid-ps-3-1"></div>
          <div class="trueid-ps-3-1"></div>
        </div>
      </div>

      <div class="box-truid-3">
        <h3 class="topic-trueid">TOPIC</h3>
        <div class="box-truid-3-1">
          <button class={[`trueid-ps-4 ${
              currentPositionIndex == 3 ? "trueid-ps-4-at" : "trueid-ps-4"
            }`]} onClick={() => selectPosHandle(3)}></button>
          <div class="trueid-ps-3-1"></div>
          <div class="trueid-ps-3-1"></div>
          <div class="trueid-ps-3-1"></div>
        </div>
      </div>

      <div class="box-trueid-4">
        <div class="trueid-ps-4-1"></div>
      </div>

      <div class="box-truid-3">
        <h3 class="topic-trueid">TOPIC</h3>
        <div class="box-truid-3-1">
          <button class={[`trueid-ps-5 ${
              currentPositionIndex == 4 ? "trueid-ps-5-at" : "trueid-ps-5"
            }`]} onClick={() => selectPosHandle(4)}></button>
          <div class="trueid-ps-3-1"></div>
          <div class="trueid-ps-3-1"></div>
          <div class="trueid-ps-3-1"></div>
        </div>
      </div>

      <div class="box-trueid-4">
        <div class="trueid-ps-5-1"></div>
      </div>

      <div class="box-trueid-4">
        <div class="trueid-ps-5-2"></div>
      </div>

      <div class="box-truid-3">
        <h3 class="topic-trueid">TOPIC</h3>
        <div class="box-truid-3-1">
          <button class={[`trueid-ps-6 ${
              currentPositionIndex == 5 ? "trueid-ps-6-at" : "trueid-ps-6"
            }`]} onClick={() => selectPosHandle(5)}></button>
          <div class="trueid-ps-3-1"></div>
          <div class="trueid-ps-3-1"></div>
          <div class="trueid-ps-3-1"></div>
        </div>
      </div>

      <div class="box-trueid-2-1">
        <div class="box-trueid-1-3"></div>
      </div>

      <div class="box-truid-3">
        <h3 class="topic-trueid">TOPIC</h3>
        <div class="box-truid-3-1">
          <button class={[`trueid-ps-7 ${
              currentPositionIndex == 6 ? "trueid-ps-7-at" : "trueid-ps-7"
            }`]} onClick={() => selectPosHandle(6)}></button>
          <div class="trueid-ps-3-1"></div>
          <div class="trueid-ps-3-1"></div>
          <div class="trueid-ps-3-1"></div>
        </div>
      </div>
      
      <div class="box-trueid-1-1">
        <div class="box-trueid-7-1"></div>
        <div class="box-trueid-7-1"></div>
        <div class="box-trueid-7-1"></div>
        <div class="box-trueid-7-1"></div>
      </div>

      <div class="box-truid-5">
        <button class={[`trueid-ps-8 ${
              currentPositionIndex == 7 ? "trueid-ps-8-at" : "trueid-ps-8"
            }`]} onClick={() => selectPosHandle(7)}></button>
      </div>

    </div>
  );
}

export default TrueIDPosition;
