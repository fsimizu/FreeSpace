import { BookOpenText, Headset, Search } from "lucide-react";
import { Resource } from '../Resource';

import './resourcesContainer.css';

export function ResourcesContainer() {
    const cards = {
        tips: {
            name: 'tips',
            longName: 'Tips & Strategies',
            description: "Expert tips, memory tricks, and note-taking techniques for confidence and accuracy.",
            imgUrl: '/images/tips.png',
            icon: <Search size={18} color={'var(--purple)'} />
        },
        vocabulary: {
            name: 'vocabulary',
            longName: 'Vocabulary',
            description: "Build your language skills with key vocabulary and exercises.",
            imgUrl: '/images/vocabulary.png',
            icon: <BookOpenText size={18} color={'var(--orange)'} />
        },
        spanish: {
            name: 'spanish',
            longName: 'Mock tests - Spanish',
            description: "Diálogos de examen realistas para aprobar tu próximo examen CCL.",
            imgUrl: '/images/lang-spanish.png',
            icon: <Headset size={18} color={'var(--red)'} />
        },
        filipino: {
            name: 'filipino',
            longName: 'Mock tests - Filipino',
            description: 'Mga realistic na exam dialog para maipasa mo ang iyong susunod na CCL exam.',
            imgUrl: '/images/lang-filipino.png',
            icon: <Headset size={18} color={'var(--green)'} />
        },
        french: {
            name: 'french',
            longName: 'Mock tests - French',
            description: 'Dialogues d’examen réalistes pour réussir votre prochain examen CCL.',
            imgUrl: '/images/lang-french.png',
            icon: <Headset size={18} color={'var(--darker-blue)'} />
        },
        portuguese: {
            name: 'portuguese',
            longName: 'Mock tests - Portuguese',
            description: 'Diálogos de exame realistas para você arrasar na sua próxima prova CCL.',
            imgUrl: '/images/lang-portuguese.png',
            icon: <Headset size={18} color={'var(--yellow)'} />
        },
    };

    return (
        <div className='resourcesContainer'>
            <div className='max-width'>
                <h2 className='resourcesContainer-title'>Resources</h2>
                <div className='resourcesContainer-cards'>
                    {Object.entries(cards).map(([key, card]) => (
                        <Resource
                            key={key}
                            resource={card}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
