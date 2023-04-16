import styled from "styled-components";

export const StyledColorPicker = styled.div`
  padding: 1rem;
  border-radius: 3px;
  background: lightgray;
  color: white;
  overflow: auto;
  display: flex;
  width: fit-content;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 340px;
  }
`;

export const GradientCanvasContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 0 1rem 0;
  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 400px) { 
    width: 250px;
    height: 250px;
  }
`;


export const CanvasBgCheckered = styled.div`
  background-image: linear-gradient(45deg, #acacac 25%, transparent 25%),
    linear-gradient(-45deg, #acacac 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #acacac 75%),
    linear-gradient(-45deg, transparent 75%, #acacac 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  height: 100%;
  width: 100%;
`;


export const CanvasCursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: 3px solid black;
  border-radius: 50%;

  div {
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 50%;
  }
`;


export const RangeInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input[type="range"]::-webkit-slider-runnable-track {
    width: 300px;
    height: 14px;
    border: none;
    border-radius: 10px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: var(--thumb-color);
    border: 1px solid black;
    transform: translateY(-18%);
  }

  input[type="range"]::-moz-range-track {
    width: 300px;
    height: 14px;
    border: none;
    border-radius: 10px;
  }

  input[type="range"]::-moz-range-thumb {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--thumb-color);
    border: 1px solid black;
  }
  @media screen and (max-width: 400px) { 
    input[type="range"]::-webkit-slider-runnable-track {
      width: 250px;
    }

    input[type="range"]::-moz-range-track {
      width: 250px;
    }
  }
`;


export const HueRangeInput = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  width: 300px;
  height: 14px;
  border-radius: 10px;
  padding: 0;
  background: linear-gradient(
    to right,
    rgb(255, 0, 0) 0%,
    rgb(255, 255, 0) 17%,
    rgb(0, 255, 0) 33%,
    rgb(0, 255, 255) 50%,
    rgb(0, 0, 255) 67%,
    rgb(255, 0, 255) 83%,
    rgb(255, 0, 0) 100%
  );

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 400px) { width: 250px; }
`;


export const AlphaRangeInput = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  width: 300px;
  height: 14px;
  border-radius: 10px;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 400px) { width: 250px; }
`;


export const AlphaBgCheckered = styled.div`
  background: linear-gradient(45deg, #acacac 25%, transparent 25%),
    linear-gradient(-45deg, #acacac 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #acacac 75%),
    linear-gradient(-45deg, transparent 75%, #acacac 75%);
  background-size: 10px 10px;
  background-position: 0 0, 0 5px, 5px -5px, -5px 0px;
  display: flex;
  border-radius: 3px;
  margin-top: 1rem;
  border-radius: 20px;
`;


export const ColorInfo = styled.div`
  max-width: 300px;
  margin-left: 3rem;
  color: black;

  fieldset {
    margin: 1rem 0;
    padding: 0;
    border: none;
    display: flex;
    justify-content: space-between;
  }

  input {
    padding: 0.4rem 0.2rem;
    font-size: 1.4rem;

    &[type="number"] {
      width: 60px;
    }
  }
  @media screen and (max-width: 700px) { margin: 0; }
`;


export const ColorPreview = styled.div`
  max-width: 320px;
  height: 60px;
  border-radius: 3px;
  @media screen and (max-width: 700px) { margin-top: 2rem; }
`;