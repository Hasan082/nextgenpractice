import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import booklover from '/src/assets/booklover'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

function MyComponent() {
    return (
        <div>
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            <p>...</p>
        </div>
    )
}

function Home() {
    return (
        <div className='section'>
            <div className="container">
                <div className='topbanner'>
                    <div className="left-div">
                        <p className='onsale color-orange'>ON SALE!</p>
                        <h2>A reader lives a <span className="linbr">
                            thousand lives <span className='color-purple'> before he dies</span>
                        </span>
                        </h2>
                        <p className='banner-body-text'>
                            Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.
                        </p>
                        <div className='btnWrapp'>
                            <Link to="/books" className='btnround bg-purple'>
                                <div className='round-btb-inner'>
                                    <p className='mb-0'>Visit Store</p>
                                    <ShoppingCartIcon className='shopingicon' />
                                </div>
                            </Link>
                            <Link to="/about" className='btn-trabsparent'>Learn More</Link>
                        </div>
                    </div>
                    <div className="right-div">
                        <Lottie animationData={booklover} loop={true} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
