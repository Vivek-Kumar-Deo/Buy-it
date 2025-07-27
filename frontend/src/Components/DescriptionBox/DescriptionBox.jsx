import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>
                An e-commerce website is an online platform that facilitates the 
                buying and selling of products or service over the internet. It
                server as a virtual marketplacve where business and individuals can 
                showcase their products, interact with customers, and conduct 
                transaction without the need for a physical presence. E-commerce 
                websites have gained immense popularity due to their convenient
                accessibility, and the global raexch they offer. </p>
            <p>
                E-commerce website typically display product or services along with
                detailed description , images , prices, and any available variable 
                (e.g. , sizes , colors). Each product usuallyhas its own dedicated 
                with relevant information.</p>
        </div>
    </div>
  )
}
