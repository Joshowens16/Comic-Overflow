import { Button, Card, CardActions, Typography } from '@mui/material';
import { sizing } from '@mui/system';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../../store/bookSlice';
import { AddShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './books.css'
const AllBooks = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const books = useSelector((state) => state.book.books)
    const fetchBooks = async () => {
        setLoading(true)
        try{
            const { data } = await axios.get('/api/books')
            dispatch(setBooks(data))
        }catch(err){
            console.log(err) //<- not sure if we want the err console logged but fine for dev purposes.
        }
        setLoading(false)
    }
    useEffect(()=> {
        fetchBooks()
    }, []);
    if (loading) return <h1>Loading...</h1>
    return (
        <div
        className='allBooks'
        >
                {
                    books.map((book)=> {
                        return (
                                <Card
                                sx={{ boxShadow: 2 }}
                                className='productCard'
                                variant="outlined"
                                key={book.id}
                                >
                                    <div
                                    className='productCardImg'
                                    >
                                    <Link
                                    to={`/books/${book.id}`}
                                    >
                                    <img src={book.imageURL}/>
                                    </Link>
                                    </div>
                                    <div
                                    className='productCardButtons'
                                    >
                                            <Typography>
                                            ${(book.price / 100).toFixed(2)}
                                            </Typography>
                                        <Button
                                        size='small'
                                        >
                                            <AddShoppingCart/>
                                        </Button>
                                    </div>
                                </Card>
                        )
                    })
                }
        </div>
    )   
};

export default AllBooks;