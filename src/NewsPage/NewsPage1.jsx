import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

function NewsPage1() {
  const [dataID, setDataID] = useState(0)
  const location = useLocation()
  useEffect(() => {
    const id = location.state.id
    console.log(id)
    setDataID(id)
  }, [location.state])
  return (
    <div>
      hi {dataID}
    </div>
  )
}

export default NewsPage1
