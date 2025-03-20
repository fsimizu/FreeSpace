import { Resource } from '../Resource';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import './resourcesContainer.css';

export function ResourcesContainer() {

    const [isTestExpanded, setIsTestExpanded] = useState(false);

    return (
        <div className='resourcesContainer'>
            <h2 className='resourcesContainer-title'>Resources</h2>

            <Resource resource={{
                name: 'tips',
                longName: 'Tips & Strategies',
                description: "Master the art of interpreting with expert tips and proven strategies! From note-taking techniques to memory tricks, we’ve got everything you need to boost your confidence and accuracy."
            }}
            />
            <Resource resource={{
                name: 'vocabulary',
                longName: 'Vocabulary',
                description: "Expand your language skills with essential vocabulary lists and exercises! Whether you’re tackling medical, legal, or everyday conversations, these words and phrases will help you interpret like a pro."
            }}
            />

            <div className='resource__container'>
                <img src="/images/woman_hero.png" className="resource-img" alt="..."></img>
                <h5 onClick={() => setIsTestExpanded(!isTestExpanded)}  className="card-title">
                    Mock tests {isTestExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </h5>
                {/* <p className="card-text">
                    Put your skills to the test with realistic mock exams! Practice under real conditions, track your progress, and get ready to ace your next interpreting challenge.
                </p> */}
                <hr />
                <div onClick={() => setIsTestExpanded(!isTestExpanded)} className="btn btn-primary resource_button">
                    Select language
                </div>

            </div>

            {isTestExpanded && (
                <>
                    <Resource resource={{
                        name: 'spanish',
                        longName: 'Spanish',
                        description: ""
                    }}
                    />

                    <Resource resource={{
                        name: 'filipino',
                        longName: 'Filipino',
                        description: ""
                    }}
                    />

                    <Resource resource={{
                        name: 'french',
                        longName: 'French',
                        description: ""
                    }}
                    />
                    <Resource resource={{
                        name: 'portuguese',
                        longName: 'Portuguese',
                        description: ""
                    }}
                    />
                </>
            )}


        </div>
    )
}
