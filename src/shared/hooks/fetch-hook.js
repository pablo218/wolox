import React, { useState, useEffect } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState("")

    const fetchFunction = async () => {



        const resp = await fetch(url);

        const respData = await resp.json();


        return respData
    }


    useEffect(() => {

        fetchFunction().then(resp => {
            setState(resp)
        })

    }, [])




    return { state }
}


