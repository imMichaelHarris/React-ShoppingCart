import {useState} from 'react'

export const useLocalStorage = (cart, initial) => {
    const [item, setItem] = useState(() => {
        const localStorageItem = JSON.stringify(item);
        return localStorageItem ? JSON.parse(localStorageItem) : initial
    })
}