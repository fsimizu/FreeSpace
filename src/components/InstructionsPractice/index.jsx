import './instructionsPractice.css';
import { MoveRight } from "lucide-react";

export function InstructionsPractice({ segment, totalSegments }) {

    const progressPercentage = (segment / totalSegments) * 100;


    return (
        <div className="instructionsPractice__container">
            <div className="max-width">

                <div 
                style={{ display: 'flex', justifyContent: 'space-between', marginTop:'1rem'}}>
                    <h5 className="instructionsPractice__title">
                        Spanish CCL Test
                    </h5>

                    <div
                        style={{ display: 'flex', width:'20%', alignItems: 'center' }}>
                        <div
                        style={{ marginRight: '0.5rem' }}>
                            {segment}/{totalSegments}
                            </div>
                        <div className="progress-bar-container">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>





                </div>

                {/* <hr />
                <div>
                    Segment {segment}
                </div>
                <hr /> */}



                <h6>To hear the segment</h6>
                <ul>
                    <li>Click <span className="instructions__start">Start</span> and speak after the chime</li>
                    <li>Click <span className="instructions__start">Finish attempt</span> to upload</li>
                </ul>

                <h6>To repeat a segment</h6>
                <ul>
                    <li>Click <span className="instructions__start">Start</span> again</li>

                </ul>

                <br />
                Click
                <span className="progressBar__button"
                    style={{ marginLeft: '10px', marginRight: '10px', cursor: 'auto' }}>
                    <MoveRight color="white" />
                </span>
                to move on to the next segment

            </div>
        </div>
    );
}