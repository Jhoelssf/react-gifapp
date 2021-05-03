import {GiftGridItem} from './GiftGridItem'

import {useFetchGifs} from '../hooks/useFetchGifs'

export const GiftGrid = ({category}: props) => {

    const {data:images, loading} = useFetchGifs({category})

    const imagePass = images.map(({id, title, url}) => (
        <GiftGridItem key={id} title={title} url={url}/>
    ))

    return (
        <>
            <h3>{category}</h3>
            <div className={'d-flex flex-row flex-wrap'}>
                {
                    imagePass
                }
            </div>
        </>
    )
}

type props = {
    category: string
}

