import './sidebarButton.css';

export function SidebarButton({ setVideoUrl, buttons, setIsSidebarOverlay }) {

    return (
        <div
            onClick={() => {
                setVideoUrl(`${buttons.url}`)
                setIsSidebarOverlay(false)
            }}
            enabled={buttons.active}
            className='sidebar__button'
        >

            <strong>{buttons.type} #{buttons.order}:</strong> {buttons.name}

        </div>
    )
}
