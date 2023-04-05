import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Books = () => {
    const { books } = useLoaderData()
    // console.log(books);
    return (
        <div>
            <div className='section'>
                <div className="container">
                    <div className="grid grid-colum-4 grid-gap-32">
                        {
                            books.map(book => <Link to={book.url} className='single-book'>
                                <div className="bookimg-wrap">
                                    <img src={book.image} alt="book" />
                                </div>
                                <div className='book-overlay-content'>
                                    <h4>{book.title}</h4>
                                    <p>{book.subtitle.substr(0, 40)}...</p>
                                    <p>Price: {book.price}</p>
                                </div>
                            </Link>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;
