import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from 'react';
import './progressBar.css';

export function ProgressBar({ totalSegments, segment, onDecrease, onIncrease }) {


    return (
        <div className="progressBar__container max-width">

                <div style={{ display: "flex", gap: "4px" }}>
                    {Array.from({ length: totalSegments }, (_, index) => (
                        <div
                            key={index}
                            style={{
                                flex: 1,
                                height: "8px",
                                backgroundColor: index < segment ? 'var(--main-blue)' : 'var(--light-grey)',
                                transition: "background-color 0.3s ease"
                            }}
                        />
                    ))}
                </div>

                <hr  style={{ marginTop: '3px', borderColor: 'var(--grey)' }}/>

                <div className='progressBar__nav'>
                    <div onClick={() => onDecrease()} className="progressBar__button"
                        style={{ marginRight: '20px', backgroundColor: 'transparent'}}>
                        <MoveLeft color="var(--black)"/>
                    </div>
                    <div onClick={() => onIncrease()} className="progressBar__button">
                        <MoveRight color="white"/>
                    </div>

            </div>
        </div>
    );
}