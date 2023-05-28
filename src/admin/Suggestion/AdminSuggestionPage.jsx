import { useEffect, useState } from "react"
import { SuggestionAPI } from "../../apis/suggestion/SuggestionAPI"
import '../Conclusion/ConclusionPage.css'

const AdminSuggestionPage = () => {
    const [allSuggestion, setAllSuggestion] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await SuggestionAPI.getAll()
            setAllSuggestion(response)
        }
        fetchData()
    }, [])
    
    return (
        <div>
          <div class="box-table">
            <p>Suggestion</p>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Website</th>
                  <th>Type</th>
                  <th>Description:</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {allSuggestion.map((sug, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{sug.web_title}</td>
                    <td>{sug.type_of_web}</td>
                    <td>{sug.description}</td>
                    <td>{sug.url_of_web}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    
        </div>
      );
}

export default AdminSuggestionPage