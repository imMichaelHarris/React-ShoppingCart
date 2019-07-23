import {useState} from 'react'

export const useLocalStorage = (key, initial) => {
    const [item, setItem] = useState(() => {
        const localStorageItem = localStorage.getItem(key)
        return localStorageItem ? JSON.parse(localStorageItem) : initial
    })

    const setItemsLS = value => {
        localStorage.setItem(key, JSON.stringify(value))
        setItem(value)
    }

    return [item, setItemsLS]

}