import React from 'react'
import logo from './logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='container-fluit'>
    <div className="row">
        <div className="col-sm-4">
            <div className="logo">
                <img src={logo} />
            </div>
        </div>
        <div className="col-sm-8">
            <div className="nav">
                <Link to="/" className="nav_item"><span class="leter_col">H</span>ome</Link>
                <Link to="/" className="nav_item"><span class="leter_col">A</span>bout</Link>
                <Link to="/" className="nav_item"><span class="leter_col">P</span>roject</Link>
                <Link to="/" className="nav_item"><span class="leter_col">E</span>xperience</Link>
                <Link to="/" className="nav_item"><span class="leter_col">B</span>log</Link>
                <Link to="/" className="btn" >Give star</Link>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Navbar
