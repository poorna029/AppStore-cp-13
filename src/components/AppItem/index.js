// Write your code here
import './index.css'

const AppItem = props => {
  const {val, tab} = props
  const {appName, imageUrl, category} = val
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="image-size" />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
