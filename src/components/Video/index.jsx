import './video.css';

export function Video({ videoUrl }) {
  return (
    <div className='video'>
        <iframe
          src={videoUrl}
          allowFullScreen
          >
        </iframe>
    </div>
  )
}
