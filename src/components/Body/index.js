import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left">
              <h1 className="body-heading">Left Navbar Menu</h1>
              <ul className="li">
                <li className="left-item">Item 1</li>
                <li className="left-item">Item 2</li>
                <li className="left-item">Item 3</li>
                <li className="left-item">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content">
              <h1 className="body-heading">Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right">
              <h1 className="body-heading">Right Navbar</h1>
              <ul className="right-list">
                <li className="right-item">
                  <p>Ad 1</p>
                </li>
                <li className="right-item">
                  <p>Ad 2</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
