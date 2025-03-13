import './sidebarButton.css';

export function SidebarButton({ setVideoUrl, buttons }) {

    return (
        <div>
            <button
                onClick={() => setVideoUrl(`${buttons.url}`)}
                enabled={buttons.active}>
                {buttons.name}
            </button>
        </div>
    )
}
