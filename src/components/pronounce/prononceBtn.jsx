import React from 'react'
import PronunceIcon from '../../assets/images/volume.svg'
const PronounceButton = ({ word }) => {
  const handleClick = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(word);
    synth.speak(utterance);
  };

  return <img src={PronunceIcon} class="pronounce-icon" alt="speech icon" onClick={handleClick} />
};

export default PronounceButton;

{/* <button onClick={handleClick}>Pronounce</button>; */}