import React from 'react'
import error404 from './Pagenotfound.png'
import './error.css'

export const Error404 = () => {
    return (
        <div className='error'>
            <img className='w-50' src={error404} alt='error404'/>
        </div>
    )
}
