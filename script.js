
document.getElementById('generate-button').addEventListener('click', () => {
    const noteSelector = document.getElementById('note-selector');
    const frequency = parseFloat(noteSelector.value);
    playNote(frequency);
});



function playNote(frequency) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1);
}