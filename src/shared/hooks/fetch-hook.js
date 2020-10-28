import { useState, useEffect, useRef } from 'react'
import { fetchFunction } from '../Utils/fetchFunction'

export const useFetch = (url, config) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: [], loading: true, error: null })


    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])


    useEffect(() => {
        fetchFunction(url, config)
            .then(responseData => {
                if (isMounted.current) {
                    setState({ data: responseData, loading: false, error: null })
                }
            })

    }, [])


    return state
}





