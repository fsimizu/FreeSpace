import React, { useState, useRef, useEffect } from 'react';
import { PracticePlayer } from '../PracticePlayer';
import { ProgressBar } from '../ProgressBar';
import { InstructionsPractice } from '../InstructionsPractice';
import { getAudio } from '../../utils/functions';
import { Loading } from "../Loading";
import './practicePlayerContainer.css';


export function PracticePlayerContainer({ videoId }) {

    const [videoAudios, setvideoAudios] = useState([]);
    const [audioUrl, setaudioUrl] = useState('');

    // call API for audios
    useEffect(() => {
        async function loadAudios(videoId) {
            try {
                const data = await getAudio(videoId);
                setvideoAudios(data);
                //habria que ordenarlos?

                setaudioUrl(data[segment - 1].audio_url)

            } catch (err) {
                console.error(err);
            }
        }
        loadAudios(videoId);
    }, []);



    const totalSegments = videoAudios.length;

    const [segment, setSegment] = useState(1);
    const questionIncrease = () => {
        setSegment(prevCount => Math.min(prevCount + 1, totalSegments));
        setAttempts(0);
    };
    const questionDecrease = () => {
        setSegment(prevCount => Math.max(prevCount - 1, 1));
        setAttempts(0);
    };

    const [attempts, setAttempts] = useState(0);

    const attemptIncrement = () => {
        setAttempts(prevCount => prevCount + 1);
    };

    return (
        <div className="practicePlayerContainer__container">
            <div className="max-width">
                <InstructionsPractice
                    segment={segment}
                    totalSegments={totalSegments} />


                {(!videoAudios || Object.keys(videoAudios).length === 0) ? (
                    <Loading />
                ) : (
                    <>
                        <PracticePlayer
                            segment={segment}
                            totalSegments={totalSegments}
                            attempts={attempts}
                            onIncreaseAttempts={attemptIncrement}
                            audioUrl={audioUrl} />
                        <ProgressBar
                            segment={segment}
                            totalSegments={totalSegments}
                            onIncrease={questionIncrease}
                            onDecrease={questionDecrease} />

                    </>
                )}




            </div>
        </div>
    );
}