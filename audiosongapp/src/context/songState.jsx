import { useEffect, useState } from 'react'
import getSong from '../network/songApi'
import SongContext from './songContext'

const SongState = (props) => {
    const [songs, setSongs] = useState([])

    const getSongData = () => {
        getSong().then(docs => {
            setSongs([...docs.data])

        })
    }

    useEffect(() => {
        getSongData()




    }, [])




    return (
        <SongContext.Provider value={{ songs }}>
            {props.children}
        </SongContext.Provider>
    )
}

export default SongState