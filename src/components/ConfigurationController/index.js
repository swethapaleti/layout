// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onContent = () => {
        onToggleShowContent()
      }

      const onLeft = () => {
        onToggleShowLeftNavbar()
      }

      const onRight = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav className="nav-container">
          <h1 className="nav-heading">Layout</h1>
          <ul className="checkbox-container">
            <li className="checkbox-item">
              <input
                checked={showContent}
                onChange={onContent}
                type="checkbox"
                id="content"
              />
              <label htmlFor="content">Content</label>
            </li>
            <li className="checkbox-item">
              <input
                checked={showLeftNavbar}
                onChange={onLeft}
                type="checkbox"
                id="left"
              />
              <label htmlFor="left">Left Navbar</label>
            </li>
            <li className="checkbox-item">
              <input
                checked={showRightNavbar}
                onChange={onRight}
                type="checkbox"
                id="right"
              />
              <label htmlFor="right">Right Navbar</label>
            </li>
          </ul>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
