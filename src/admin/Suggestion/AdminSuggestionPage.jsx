import { useEffect, useState } from "react"
import { SuggestionAPI } from "../../apis/suggestion/SuggestionAPI"

const AdminSuggestionPage = () => {
    const [allSuggestion, setAllSuggestion] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await SuggestionAPI.getAll()
            setAllSuggestion(response)
        }
        fetchData()
    }, [])
    
    return <div>{allSuggestion.map((sug, index) => {
        return <h2 key={index}>{sug.web_title} userID: {sug.user_id} type: {sug.type_of_web} note: {sug.description} url: {sug.url_of_web}</h2>
    })}</div>
}

export default AdminSuggestionPage