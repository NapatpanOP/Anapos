import React, { useState } from 'react';
import './SugPage.css';
import { SuggestionAPI } from './apis/suggestion/SuggestionAPI';
import { useAuthContext } from './core/contexts/AuthProvider';
// import { database } from './firebase';

function SugPage() {
const { token, loadingAction } = useAuthContext()

  const [websiteName, setWebsiteName] = useState('');
  const [websiteType, setWebsiteType] = useState('');
  const [note, setNote] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [addStatus, setAddStatus] = useState()

  const handleNameChange = (event) => {
    setWebsiteName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setWebsiteType(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleUrlChange = (event) => {
    setWebsiteUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add website suggestion to database
    const suggestionsRef = database.ref('suggestions');
    const newSuggestionRef = suggestionsRef.push();
    newSuggestionRef.set({
      websiteName: websiteName,
      websiteType: websiteType,
      note: note,
      websiteUrl: websiteUrl,
    });

    // Clear form inputs
    setWebsiteName('');
    setWebsiteType('Portal');
    setNote('');
    setWebsiteUrl('');
  };

  const addSuggestion = async ()  => {
    setAddStatus(null)
    loadingAction.onLoading(true)
    await SuggestionAPI.add({
      user_id: token._id,
      web_title: websiteName,
      type_of_web: websiteType,
      description: note,
      url_of_web:  websiteUrl
    }).then(() => {
      loadingAction.onLoading(false)
    })
    
    setAddStatus('success')

  }

  const renderAddStatus = () => {
    if(addStatus != null) {
      return <div className='add-status'>{addStatus}</div>
    }
  }

  return (
    <div className="sug-page">
      <div className="sug-form">
        
        <div id='div-form'>
          <div className="sug-header">
            <h1>ข้อเสนอแนะ</h1>
          </div>
          <div className="form-group">
            <label htmlFor="website-name">ชื่อเว็บไซต์*:</label>
            <input type="text" id="website-name" value={websiteName} onChange={handleNameChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="website-type">ประเภทเว็บไซต์*:</label>
            <select id="website-type" value={websiteType} onChange={handleTypeChange}>
              <option value="">-- ประเภทเว็บไซต์ --</option>
              <option value="Portal">บันเทิง</option>
              <option value="New">ข่าวสาร</option>
              <option value="Business">ธุรกิจ</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="note">เหตุผลที่เสนอเว็บไซต์นี้:</label>
            <textarea className="note-form" id="note" value={note} onChange={handleNoteChange}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="website-url">URL ของเว็บไซต์*:</label>
            <input className="url-form" type="url" id="website-url" value={websiteUrl} onChange={handleUrlChange} required />
          </div>

          {renderAddStatus()}
          <button type="submit-sug" className='submit-sug' onClick={() => addSuggestion()}>ยืนยัน</button>
        </div>
      </div>
    </div>
  );
}

export default SugPage;
