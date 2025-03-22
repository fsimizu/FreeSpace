import { Resource } from '../Resource';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import './resourcesContainer.css';

export function ResourcesContainer() {

    return (
        <div className='resourcesContainer'>
            <h2 className='resourcesContainer-title'>Resources</h2>

            <Resource resource={{
                name: 'tips',
                longName: 'Tips & Strategies',
                description: "The best tips",
                imgUrl: '/images/tips.png'
            }}
            />
            <Resource resource={{
                name: 'vocabulary',
                longName: 'Vocabulary',
                description: "Expand your language skills",
                imgUrl: '/images/vocabulary.png'
            }}
            />

            {/* <h6>Mock tests</h6> */}

            <Resource resource={{
                name: 'spanish',
                longName: 'Mock tests - Spanish',
                description: "Expand your language skills",
                imgUrl: '/images/lang-spanish.png'
            }}
            />

            <Resource resource={{
                name: 'filipino',
                longName: 'Mock tests - Filipino',
                description: 'Expand your language skills',
                imgUrl: '/images/lang-filipino.png'
            }}
            />

            <Resource resource={{
                name: 'french',
                longName: 'Mock tests - French',
                description: 'Expand your language skills',
                imgUrl: '/images/lang-french.png'
            }}
            />
            <Resource resource={{
                name: 'portuguese',
                longName: 'Mock tests - Portuguese',
                description: 'Expand your language skills',
                imgUrl: '/images/lang-portuguese.png'
            }}
            />



        </div>
    )
}
