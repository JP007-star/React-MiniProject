import React from 'react'
import './style.css'
import { NavLink } from 'react-bootstrap'
export default function Footer() {
  return (
    <>
       <footer>
         <div className='footer-content'>
            <p>&copy; 2023 Your Name</p>
            <ul>
                <li><NavLink to="tel://9080059962">Contact Us</NavLink></li>
                <li><NavLink to="#">Terms & Condition</NavLink></li>

            </ul>
         </div>
       </footer>
    </>
  )
}
