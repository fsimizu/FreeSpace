import './sidebarButton.css';

export function SidebarButton({ setVideoUrl, buttons, setIsSidebarOverlay, isActive, index }) {

    return (
        <div
            onClick={
                buttons.enabled ? () => {
                    setVideoUrl(`${buttons.url}`, index);
                    setIsSidebarOverlay(false)
                }
                    : undefined
            }
            className={`sidebar__button ${buttons.enabled ? '' : 'disabled'} ${isActive ? 'active' : ''}`}
        >
            <strong>#{buttons.order}</strong>: {buttons.name}
        </div>
    )
}
