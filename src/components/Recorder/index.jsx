import React, { useState, useRef, useEffect } from 'react';
import { Mic } from "lucide-react";

import './recorder.css';

export function Recorder() {

    // Audio Player
    const [audioStatus, setAudioStatus] = useState('Waiting to play...');

    const handleAudioEnded = () => {
        setAudioStatus('Audio playback has finished!');
        alert('The audio has finished playing!');
    };


    // Recorder
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [attempts, setattempts] = useState(0);

    const audioPlayerRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioStreamRef = useRef(null);
    const audioChunksRef = useRef([]);

    const attemptIncrement = () => {
        setattempts(prevCount => prevCount + 1);
    };

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
        try {
            attemptIncrement();
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

        } catch (err) {
            console.error('Error accessing microphone:', err);
            setStatusMessage('Error: Could not access microphone. Please ensure permissions are granted.');
            setIsRecording(false);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
            setIsRecording(false);

        }
    };

    return (
        <div className='recorder__container'>
            <div className='max-width'>

                {/* <div className="audio-player-container">
                    <audio
                        controls
                        src='/audios/Subscribe_audio.mp3'
                        onEnded={handleAudioEnded}
                    >
                        Your browser does not support the audio element.
                    </audio>
                    <p>{audioStatus}</p>
                </div> */}


                <div className="recorder__recording">
                    <div className="audio-playback">
                        <audio ref={audioPlayerRef} controls src={audioURL}></audio>
                    </div>

                    <div className="controls">
                        <span id="attempts">Attempts: {attempts}</span>

                        {!isRecording ?
                            <button onClick={startRecording}>
                                <Mic size={16} /> Record
                            </button> :
                            <button onClick={stopRecording}>
                                Finish attempt
                            </button>
                        }
                            
                        <span className={isRecording ? 'status-recording' : ''}>
                            {isRecording ?<div className="recording"></div>:''}
                            {statusMessage}
                        </span>
                        
                    </div>

                </div>

            </div>
        </div>
    );
}