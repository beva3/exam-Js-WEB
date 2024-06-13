let speech = new SpeechSynthesisUtterance();
let btn = document.querySelector('button');

/**
 * select voices
 */
let voices = [];
let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice,i)=>voiceSelect.options[i] = new Option(voice.name,i));
}
voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})
btn.addEventListener('click', () =>{
    speech.text = document.querySelector('textarea').value; //! read
    window.speechSynthesis.speak(speech);//! speak
});