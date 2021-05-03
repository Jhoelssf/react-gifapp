import {useEffect, useState} from 'react'
import {getGifts} from '../helpers/getGifts'

export const useFetchGifs = ({category}: props) => {
    const [images, setImages] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifts({category})
            .then(imgs => setImages({
                data: imgs,
                loading: false
            }))
    }, [category])

    return images
}

type props = {
    category: string
}
