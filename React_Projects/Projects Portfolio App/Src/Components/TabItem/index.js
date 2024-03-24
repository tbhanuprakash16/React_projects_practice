import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabButton = () => {
    onClickTabId(tabId)
  }

  const activeTabButton = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabButton}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
