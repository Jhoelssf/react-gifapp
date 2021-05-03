import React, {useState} from 'react'

type props = {
    setCategories?: React.Dispatch<React.SetStateAction<string[]>>
}

export const AddCategory = ({setCategories }: props) => {

    const [inputValue, setInputValue] = useState('')
    // const handleAdd = () => {
    //     setCategories([
    //         ...categories,
    //         'Naruto'
    //     ])
    // }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            if (setCategories) {
                setCategories((cats: string[]) => [inputValue, ...cats])
                setInputValue('')
            }
        }
    }

    return (
        <form action=""
              onSubmit={handleSubmit}>
            <input type="text"
                   value={inputValue}
                   onChange={handleInputChange}
                   className={'form-control form-control-sm'}/>
        </form>
    )
}
