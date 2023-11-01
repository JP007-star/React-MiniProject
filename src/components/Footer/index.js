import React from 'react'
import './style.css'
export default function Footer() {
  return (
    <>
       <footer>
         <div className='footer-content'>
            <p>&copy; 2023 Your Name</p>
            <ul>
                <li><Link to="tel://9080059962">Contact Us</Link></li>
                <li><Link to="#">Terms & Condition</Link></li>

            </ul>
         </div>
       </footer>
    </>
  )
}
