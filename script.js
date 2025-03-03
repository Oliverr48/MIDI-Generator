// Base frequencies for all notes (C4 to B5)
const noteFrequencies = {
    'C4': 261.63,
    'C#4': 277.18,
    'D4': 293.66,
    'D#4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4': 369.99,
    'G4': 392.00,
    'G#4': 415.30,
    'A4': 440.00,
    'A#4': 466.16,
    'B4': 493.88,
    'C5': 523.25,
    'C#5': 554.37,
    'D5': 587.33,
    'D#5': 622.25,
    'E5': 659.25,
    'F5': 698.46,
    'F#5': 739.99,
    'G5': 783.99,
    'G#5': 830.61,
    'A5': 880.00,
    'A#5': 932.33,
    'B5': 987.77
};

const scales = {
    major: {
        'C': [noteFrequencies.C4, noteFrequencies.D4, noteFrequencies.E4, noteFrequencies.F4, noteFrequencies.G4, noteFrequencies.A4, noteFrequencies.B4, noteFrequencies.C5],
        'C#': [noteFrequencies['C#4'], noteFrequencies['D#4'], noteFrequencies['F4'], noteFrequencies['F#4'], noteFrequencies['G#4'], noteFrequencies['A#4'], noteFrequencies['C5'], noteFrequencies['C#5']],
        'D': [noteFrequencies.D4, noteFrequencies.E4, noteFrequencies['F#4'], noteFrequencies.G4, noteFrequencies.A4, noteFrequencies.B4, noteFrequencies['C#5'], noteFrequencies.D5],
        'D#': [noteFrequencies['D#4'], noteFrequencies['F4'], noteFrequencies.G4, noteFrequencies['G#4'], noteFrequencies['A#4'], noteFrequencies.C5, noteFrequencies.D5, noteFrequencies['D#5']],
        'E': [noteFrequencies.E4, noteFrequencies['F#4'], noteFrequencies['G#4'], noteFrequencies.A4, noteFrequencies.B4, noteFrequencies['C#5'], noteFrequencies['D#5'], noteFrequencies.E5],
        'F': [noteFrequencies.F4, noteFrequencies.G4, noteFrequencies.A4, noteFrequencies['A#4'], noteFrequencies.C5, noteFrequencies.D5, noteFrequencies.E5, noteFrequencies.F5],
        'F#': [noteFrequencies['F#4'], noteFrequencies['G#4'], noteFrequencies['A#4'], noteFrequencies.B4, noteFrequencies['C#5'], noteFrequencies['D#5'], noteFrequencies.F5, noteFrequencies['F#5']],
        'G': [noteFrequencies.G4, noteFrequencies.A4, noteFrequencies.B4, noteFrequencies.C5, noteFrequencies.D5, noteFrequencies.E5, noteFrequencies['F#5'], noteFrequencies.G5],
        'G#': [noteFrequencies['G#4'], noteFrequencies['A#4'], noteFrequencies.C5, noteFrequencies['C#5'], noteFrequencies['D#5'], noteFrequencies.F5, noteFrequencies.G5, noteFrequencies['G#5']],
        'A': [noteFrequencies.A4, noteFrequencies.B4, noteFrequencies['C#5'], noteFrequencies.D5, noteFrequencies.E5, noteFrequencies['F#5'], noteFrequencies['G#5'], noteFrequencies.A5],
        'A#': [noteFrequencies['A#4'], noteFrequencies.C5, noteFrequencies.D5, noteFrequencies['D#5'], noteFrequencies.F5, noteFrequencies.G5, noteFrequencies.A5, noteFrequencies['A#5']],
        'B': [noteFrequencies.B4, noteFrequencies['C#5'], noteFrequencies['D#5'], noteFrequencies.E5, noteFrequencies['F#5'], noteFrequencies['G#5'], noteFrequencies['A#5'], noteFrequencies.B5]
    },
    minor: {
        'C': [noteFrequencies.C4, noteFrequencies.D4, noteFrequencies['D#4'], noteFrequencies.F4, noteFrequencies.G4, noteFrequencies['G#4'], noteFrequencies['A#4'], noteFrequencies.C5],
        'C#': [noteFrequencies['C#4'], noteFrequencies['D#4'], noteFrequencies.E4, noteFrequencies['F#4'], noteFrequencies['G#4'], noteFrequencies.A4, noteFrequencies.B4, noteFrequencies['C#5']],
        'D': [noteFrequencies.D4, noteFrequencies.E4, noteFrequencies.F4, noteFrequencies.G4, noteFrequencies.A4, noteFrequencies['A#4'], noteFrequencies.C5, noteFrequencies.D5],
        'D#': [noteFrequencies['D#4'], noteFrequencies['F4'], noteFrequencies['F#4'], noteFrequencies['G#4'], noteFrequencies['A#4'], noteFrequencies.B4, noteFrequencies['C#5'], noteFrequencies['D#5']],
        'E': [noteFrequencies.E4, noteFrequencies['F#4'], noteFrequencies.G4, noteFrequencies.A4, noteFrequencies.B4, noteFrequencies.C5, noteFrequencies.D5, noteFrequencies.E5],
        'F': [noteFrequencies.F4, noteFrequencies.G4, noteFrequencies['G#4'], noteFrequencies['A#4'], noteFrequencies.C5, noteFrequencies['C#5'], noteFrequencies['D#5'], noteFrequencies.F5],
        'F#': [noteFrequencies['F#4'], noteFrequencies['G#4'], noteFrequencies.A4, noteFrequencies.B4, noteFrequencies['C#5'], noteFrequencies.D5, noteFrequencies.E5, noteFrequencies['F#5']],
        'G': [noteFrequencies.G4, noteFrequencies.A4, noteFrequencies['A#4'], noteFrequencies.C5, noteFrequencies.D5, noteFrequencies['D#5'], noteFrequencies.F5, noteFrequencies.G5],
        'G#': [noteFrequencies['G#4'], noteFrequencies['A#4'], noteFrequencies.B4, noteFrequencies['C#5'], noteFrequencies['D#5'], noteFrequencies.E5, noteFrequencies['F#5'], noteFrequencies['G#5']],
        'A': [noteFrequencies.A4, noteFrequencies.B4, noteFrequencies.C5, noteFrequencies.D5, noteFrequencies.E5, noteFrequencies.F5, noteFrequencies.G5, noteFrequencies.A5],
        'A#': [noteFrequencies['A#4'], noteFrequencies.C5, noteFrequencies['C#5'], noteFrequencies['D#5'], noteFrequencies.F5, noteFrequencies['F#5'], noteFrequencies['G#5'], noteFrequencies['A#5']],
        'B': [noteFrequencies.B4, noteFrequencies['C#5'], noteFrequencies.D5, noteFrequencies.E5, noteFrequencies['F#5'], noteFrequencies.G5, noteFrequencies.A5, noteFrequencies.B5]
    }
};

let audioContext = null;
let currentMelody = [];

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

// Function to play a note with a specific frequency
function playNote(frequency, startTime, duration, volume = 0.25) {
    const context = initAudioContext();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, context.currentTime + startTime);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    gainNode.gain.setValueAtTime(volume, context.currentTime + startTime);

    oscillator.start(context.currentTime + startTime);
    oscillator.stop(context.currentTime + startTime + duration);
}

// Play a full scale
function playScale(scaleArray) {
    const noteDelay = 0.5;
    const noteDuration = 0.4;

    scaleArray.forEach((frequency, index) => {
        const startTime = index * noteDelay;
        playNote(frequency, startTime, noteDuration);
    });
}

function getRandomNoteFromScale(scaleArray) {
    const randomIndex = Math.floor(Math.random() * scaleArray.length);
    return scaleArray[randomIndex];
}

function getRandomDuration() {
    const durations = [0.25, 0.5, 0.75, 1, 1.5];
    const randomIndex = Math.floor(Math.random() * durations.length);
    return durations[randomIndex];
}

function generateSimpleMelody(scaleArray, length = 8) {
    const melody = [];

    for (let i = 0; i < length; i++) {
        const note = getRandomNoteFromScale(scaleArray);
        const duration = getRandomDuration();
        melody.push({ frequency: note, duration: duration });
    }
    return melody;
}

function playMelody(melody) {
    let currentTime = 0;

    melody.forEach(note => {
        playNote(note.frequency, currentTime, note.duration);
        currentTime += note.duration;
    });
}

function downloadMIDI() {
    if (currentMelody.length === 0) {
        alert('Please generate a melody first!');
        return;
    }
    
    // Simple approach: Create MIDI with a series of note-on followed by note-offs with velocity 0
    let midi = [];
    
    // MThd header
    midi.push(0x4D, 0x54, 0x68, 0x64);  // "MThd"
    midi.push(0x00, 0x00, 0x00, 0x06);  // Header length
    midi.push(0x00, 0x00);              // Format 0
    midi.push(0x00, 0x01);              // One track
    midi.push(0x00, 0x60);              // 96 ticks per quarter note
    
    // MTrk header
    midi.push(0x4D, 0x54, 0x72, 0x6B);  // "MTrk"
    
    // We'll fill in the length later
    const trackLengthIndex = midi.length;
    midi.push(0x00, 0x00, 0x00, 0x00);  // Placeholder for track length
    
    const trackStartIndex = midi.length;
    
    // Set tempo (120 BPM)
    midi.push(0x00);                    // Delta time
    midi.push(0xFF, 0x51, 0x03);        // Tempo meta event
    midi.push(0x07, 0xA1, 0x20);        // 500,000 microseconds per quarter note
    
    // Set instrument to piano
    midi.push(0x00);                    // Delta time
    midi.push(0xC0, 0x00);              // Program change, channel 0, program 0 (piano)
    
    // Add each note
    for (let i = 0; i < currentMelody.length; i++) {
        const note = currentMelody[i];
        
        // Find closest MIDI note
        let midiNote = 60; // Default to middle C
        let bestMatch = 261.63; // C4 frequency
        
        for (const [noteName, freq] of Object.entries(noteFrequencies)) {
            if (Math.abs(note.frequency - freq) < Math.abs(note.frequency - bestMatch)) {
                bestMatch = freq;
                
                // Parse the note name to get MIDI note number
                const match = noteName.match(/([A-G]#?)(\d+)/);
                if (match) {
                    const noteLetter = match[1];
                    const octave = parseInt(match[2]);
                    
                    const noteTable = {
                        'C': 0, 'C#': 1, 'D': 2, 'D#': 3, 'E': 4, 'F': 5,
                        'F#': 6, 'G': 7, 'G#': 8, 'A': 9, 'A#': 10, 'B': 11
                    };
                    
                    midiNote = (octave + 1) * 12 + noteTable[noteLetter];
                }
            }
        }
        
        // Note on - delta time 0
        midi.push(0x00);                // Delta time
        midi.push(0x90, midiNote, 0x64); // Note on, note, velocity
        
        // Convert duration to ticks
        const durationTicks = Math.round(note.duration * 96); // 96 ticks per quarter note
        
        // For simplicity, use a fixed delta time (not variable length encoding)
        // Note: This limits the duration but should work for typical melodies
        if (durationTicks <= 127) { 
            midi.push(durationTicks);   // Delta time (1 byte)
        } else {
            // Encode as variable length - simplified version for 2 bytes
            midi.push(0x81, durationTicks & 0x7F); // Delta time (2 bytes)
        }
        
        // Note off (implemented as note on with velocity 0 - standard MIDI practice)
        midi.push(0x90, midiNote, 0x00); // Note off using note-on with velocity 0
    }
    
    // End of track
    midi.push(0x00);                    // Delta time
    midi.push(0xFF, 0x2F, 0x00);        // End of track marker
    
    // Calculate and write track length
    const trackLength = midi.length - trackStartIndex;
    midi[trackLengthIndex] = (trackLength >> 24) & 0xFF;
    midi[trackLengthIndex + 1] = (trackLength >> 16) & 0xFF;
    midi[trackLengthIndex + 2] = (trackLength >> 8) & 0xFF;
    midi[trackLengthIndex + 3] = trackLength & 0xFF;
    
    // Create and download the MIDI file
    const midiFile = new Uint8Array(midi);
    const blob = new Blob([midiFile], { type: 'audio/midi' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'melody.mid';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Set up event listeners when page loads
document.addEventListener('DOMContentLoaded', () => { 
    document.getElementById('play-scale-button').addEventListener('click', () => {
        const keySelector = document.getElementById('key-selector');
        const scaleSelector = document.getElementById('scale-selector');

        const key = keySelector.value;
        const scaleType = scaleSelector.value;

        const scaleToPlay = scales[scaleType][key];
        playScale(scaleToPlay);
    });

    document.getElementById('generate-melody-button').addEventListener('click', () => {
        const keySelector = document.getElementById('key-selector');
        const scaleSelector = document.getElementById('scale-selector');

        const key = keySelector.value;
        const scaleType = scaleSelector.value;
        
        const scale = scales[scaleType][key];
        currentMelody = generateSimpleMelody(scale, 8);

        const notification = document.getElementById('notification');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    });

    document.getElementById('play-melody-button').addEventListener('click', () => {
        playMelody(currentMelody);
    });

    document.getElementById('download-midi-button').addEventListener('click', () => {
        downloadMIDI();
    });
});