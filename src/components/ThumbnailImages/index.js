import './index.css'

const ThumbnailImages = props => {
  const {thumbDetails, onImageClick} = props
  const {thumbnailUrl} = thumbDetails

  const onClickImage = () => {
    onImageClick(thumbnailUrl)
  }

  return (
    <li>
      <button type="button" className="thumb-button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-image" />
      </button>
    </li>
  )
}
export default ThumbnailImages
