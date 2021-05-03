import {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import {GiftGrid} from './components/GiftGrid'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState<string[]>(['One Punch'])

    const cat = categories.map((category) => {
        return <GiftGrid key={category} category={category}/>
    })

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    cat
                }
            </ol>
        </>
    )
}
