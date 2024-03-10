// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Popup} from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import Home from '../Home'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

class Header extends Component {
  render() {
    const overlayStyles = {
      backgroundColor: '#ffff',
    }
    return (
      <div className="container-header">
        <Link to="/" className="link-style">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="image-websitelogo"
          />
        </Link>
        <Popup
          className="pop-up-style"
          modal
          trigger={open =>
            open ? (
              <button
                className="button"
                data-testid="closeButton"
                onClick={() => open()}
              >
                <IoMdClose className="react-icon-style" />
              </button>
            ) : (
              <button className="button" data-testid="hamburgerIconButton">
                <GiHamburgerMenu className="react-icon-style" />
              </button>
            )
          }
          position="bottom center"
          overlayStyles={overlayStyles}
          closeOnDocumentClick
        >
          <ul className="content-container">
            <li>
              <AiFillHome className="home-icon" />
              <Link to="/" className="link-style">
                <p className="home-text">Home</p>
              </Link>
            </li>
            <li>
              <BsInfoCircleFill className="home-icon" />
              <Link to="/about" className="link-style">
                {' '}
                <p className="home-text">About</p>
              </Link>
            </li>
          </ul>
        </Popup>
      </div>
    )
  }
}
export default Header
