import { Resource } from '../Resource';

import './resourcesContainer.css';

export function ResourcesContainer() {

    return (
        <div className='resourcesContainer'>
            <h3>Resources</h3>

            <Resource resource={{
                name: 'tips',
                longName: 'Tips & Strategies'
            }}
            />
            <Resource resource={{
                name: 'vocabulary',
                longName: 'Vocabulary'
            }}
            />
            <Resource resource={{
                name: 'spanish',
                longName: 'Spanish'
            }}
            />
            <Resource resource={{
                name: 'filipino',
                longName: 'Filipino'
            }}
            />

            <Resource resource={{
                name: 'french',
                longName: 'French'
            }}
            />
            <Resource resource={{
                name: 'portuguese',
                longName: 'Portuguese'
            }}
            />

        </div>
    )
}
