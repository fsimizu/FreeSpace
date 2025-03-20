import './sidebarButton.css';

export function SidebarButton({ setVideoUrl, buttons, setIsSidebarOverlay }) {

    return (
        <div

            onClick={
                buttons.enabled ? () => {
                    setVideoUrl(`${buttons.url}`)
                    setIsSidebarOverlay(false)
                }
                    : undefined
            }

            className={`sidebar__button ${buttons.enabled ? '' : 'disabled'}`}
        >
            <strong>#{buttons.order}</strong>: {buttons.name}
        </div>
    )
}
