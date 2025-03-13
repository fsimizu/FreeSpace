import { Resource } from '../Resource';

import './resourcesContainer.css';

export function ResourcesContainer() {

    return (
        <div>

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
