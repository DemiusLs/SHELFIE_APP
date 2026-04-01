import {createContext, useState, useEffect} from "react";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { databases } from "../lib/appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = process.env.DATABASE_ID;
const COLLECTION_ID= process.env.COLLECTION_ID;

export const BooksContext = createContext();

export function BooksProvider ({children}){
    const [books, setBooks] = useState([]);
    const {user} = useUser();

    async function fetchBooks() {
        try {
            const response = await databases.listDocuments(
            DATABASE_ID, 
            COLLECTION_ID,
            [
            Query.equal('userId', user.$id)
            ]
        )
        setBooks(response.documents);
        console.log(response.documents);            
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
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId : user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            )
            
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

    useEffect(() => {

        if (user) {
        fetchBooks()
        } else {
        setBooks([])
        }

    }, [user])

    return(
            <BooksContext.Provider value={{books, fetchBooks ,fetchBook, createBook, deleteBook}}>
                {children}
            </BooksContext.Provider>
        )
}