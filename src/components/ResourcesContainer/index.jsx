import { Resource } from '../Resource';
import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpenText, Search, Headset } from "lucide-react";

import './resourcesContainer.css';

export function ResourcesContainer() {

    return (
        <div className='resourcesContainer'>
             <h2 className='resourcesContainer-title'>Resources</h2>
            
            <Resource resource={{
                name: 'tips',
                longName: 'Tips & Strategies',
                description: "Expert tips, memory tricks, and note-taking techniques for confidence and accuracy.",
                imgUrl: '/images/tips.png',
                icon:<Search size={18} color={'var(--purple)'}/>
            }}
            />
            <Resource resource={{
                name: 'vocabulary',
                longName: 'Vocabulary',
                description: "Build your language skills with key vocabulary and exercises.",
                imgUrl: '/images/vocabulary.png',
                icon:<BookOpenText size={18} color={'var(--orange)'}/>
            }}
            />

            {/* <h6>Mock tests</h6> */}

            <Resource resource={{
                name: 'spanish',
                longName: 'Mock tests - Spanish',
                description: "Diálogos de examen realistas para aprobar tu próximo examen CCL.",
                imgUrl: '/images/lang-spanish.png',
                icon:<Headset size={18} color={'var(--red)'}/>
            }}
            />

            <Resource resource={{
                name: 'filipino',
                longName: 'Mock tests - Filipino',
                description: 'Mga realistic na exam dialog para maipasa mo ang iyong susunod na CCL exam.',
                imgUrl: '/images/lang-filipino.png',
                icon:<Headset size={18} color={'var(--green)'}/>
            }}
            />

            <Resource resource={{
                name: 'french',
                longName: 'Mock tests - French',
                description: 'Dialogues d’examen réalistes pour réussir votre prochain examen CCL.',
                imgUrl: '/images/lang-french.png',
                icon:<Headset size={18} color={'var(--darker-blue)'}/>
            }}
            />
            <Resource resource={{
                name: 'portuguese',
                longName: 'Mock tests - Portuguese',
                description: 'Diálogos de exame realistas para você arrasar na sua próxima prova CCL.',
                imgUrl: '/images/lang-portuguese.png',
                icon:<Headset size={18} color={'var(--yellow)'}/>
            }}
            />



        </div>
    )
}
