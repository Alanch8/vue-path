import giphyApi from './basics/11-axios'
// import { giphyApi } from "./basics/11-axios";

const getImage = async () => {

    try {
        const {data} = (await giphyApi.get('/random')).data
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append( img )

        console.log(url);

    } catch (error) {
        console.log('Error en la petición:', error)
        throw error
    }

}

getImage()