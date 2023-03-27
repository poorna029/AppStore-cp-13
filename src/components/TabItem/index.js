// Write your code here
import './index.css'

const TabItem = props => {
  const {val, tabUpdateFunction, tab, isActive} = props
  const {displayText, tabId} = val
  console.log(isActive)

  const updateTab = e => {
    tabUpdateFunction(tabId)
  }
  return (
    <li className="hel">
      <button onClick={updateTab} className="tab-button">
        <p className={`${isActive ? 'active p' : null}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
