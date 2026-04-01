import {createContext, useState, useEffect} from "react";
import { ID } from "react-native-appwrite";
import { databases } from "../lib/appwrite";

const DATABASE_ID = process.env.DATABASE_ID;
const COLLECTION_ID= process.env.COLLECTION_ID;

export const BooksContext = createContext();

export function BooksProvider ({children}){
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        try {
            
        } catch (error) {
            console.error(error.message);
        }
    }


    async function fetchBook(id) {
        try {
            
        } catch (error) {
            console.error(error.message);
        }
    }

    async function createBook(data) {
        try {
            
        } catch (error) {S
            console.error(error.message);
        }
    }

    async function deleteBook(id) {
        try {
            
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
            <BooksContext.Provider value={{books, fetchBooks ,fetchBook, createBook, deleteBook}}>
                {children}
            </BooksContext.Provider>
        )
}