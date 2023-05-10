import React, { useState } from 'react';
import './TypesWebPage.css'
import { useAuthContext } from './core/contexts/AuthProvider';
import { useNavigate } from 'react-router';

function PageGraph() {
  const { token } = useAuthContext()
  const navigate = useNavigate()
  if(!token) {navigate('/login')}
  return (
    <div>
        <p className="text-head">Graph</p>
    </div>
  );
}

export default PageGraph;