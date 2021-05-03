type props = {
    category: string
}

type response = {
    id: string,
    title: string,
    images: {
        downsized_medium: {
            url: string
        }
    }
}

export const getGifts = async ({category}: props) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=IPsmwEaofK3zRuEaKEn0FAAm6eUEMvdG`
    const resp = await fetch(url)
    const {data} = await resp.json()

    return data.map((img: response) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
}
