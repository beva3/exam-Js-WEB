// let btn_listen = document.getElementById('btn_listen');
// let txt = document.getElementById('editor').value;

// btn_listen.addEventListener('click', () => {
//     let speech = new SpeechSynthesisUtterance(txt);
//     speechSynthesis.speak(speech);
//     console.log(txt);
// });

let speech = new SpeechSynthesisUtterance();
let btn = document.getElementById('btn_listen');

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