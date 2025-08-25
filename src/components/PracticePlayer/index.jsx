import React, { useState, useRef, useEffect } from 'react';
import './practicePlayer.css';

export function PracticePlayer({ segment, totalSegments, attempts, onIncreaseAttempts, audioUrl }) {

    // Audio Player
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null);

    const handlePlay = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioStreamRef.current = stream;

            if (attempts > 0) {
                alert('are you sure?')
            }

            audioRef.current.play();
            setIsPlaying(true);
            setStatusMessage(' PLAYING AUDIO...');
            onIncreaseAttempts();

        } catch (err) {
            console.error('Error accessing microphone:', err);
            setStatusMessage('Error: Please ensure permissions are granted.');
            setIsRecording(false);
        }
    };


    const handleAudioEnded = () => {
        setIsPlaying(false);
        startRecording();
    };


    // Recorder
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const audioPlayerRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioStreamRef = useRef(null);
    const audioChunksRef = useRef([]);

    useEffect(() => {
        return () => {
            if (audioStreamRef.current) {
                audioStreamRef.current.getTracks().forEach(track => track.stop());
            }
            if (audioURL) {
                URL.revokeObjectURL(audioURL);
            }
        };
    }, [audioURL]);

    const startRecording = async () => {
        if (audioStreamRef.current) {
            audioStreamRef.current.getTracks().forEach(track => track.stop());
        }
        if (audioURL) {
            URL.revokeObjectURL(audioURL);
        }
        audioChunksRef.current = [];
        setAudioURL('');


        // --- START NEW RECORDING SESSION ---
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioStreamRef.current = stream;

        const recorder = new MediaRecorder(stream);
        mediaRecorderRef.current = recorder;

        recorder.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
        };

        recorder.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
            const url = URL.createObjectURL(audioBlob);
            setAudioURL(url); // Set the audio URL state
            setStatusMessage('');

            if (audioStreamRef.current) {
                audioStreamRef.current.getTracks().forEach(track => track.stop());
            }

        };

        recorder.start();
        setIsRecording(true);
        setStatusMessage(' RECORDING...');

    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
            setIsRecording(false);

        }
    };

    return (
        <div className="practicePlayer__container">
            <div className="max-width">

                audio Url: {audioUrl} + {segment}


                {/* <div>Playing segment {segment}/{totalSegments}</div> */}
                <div
                style={{ textAlign: 'center'}}>
                    <img src="/images/spanish_11.png" alt="spanish_11" />
                </div>

                {/* Audio Player */}
                <div className="audio-player-container">
                    <audio
                        controls
                        ref={audioRef}
                        src={audioUrl}
                        onEnded={handleAudioEnded}
                    >
                        Your browser does not support the audio element.
                    </audio>
                </div>

                <div className="practicePlayer__recording">
                    <div className="practicePlayer__playback">
                        <audio ref={audioPlayerRef} controls src={audioURL}></audio>
                    </div>

                    <div className="controls">
                        <span id="attempts">Attempts: {attempts}</span>
                        {!isRecording ?
                            <button onClick={handlePlay} disabled={isPlaying}>
                                {/* {!isPlaying ? 'Start' : 'Playing...'} */}
                                Start
                            </button> :
                            <button onClick={stopRecording}>
                                Finish attempt
                            </button>
                        }
                        <span className='status-message'>
                            {isRecording ? <div className="recording"></div> : ''}
                            {statusMessage}
                        </span>

                    </div>

                </div>
            </div>
        </div>
    );
}