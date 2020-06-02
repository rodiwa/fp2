import React from 'react';

const ShowcaseWidget = (props) => {
  const { widgetData } = props
  console.log(widgetData)
  return (
    <div className="cards-widget">
      <label>Showcase Widget</label>
    </div>
  )
}

export default ShowcaseWidget
