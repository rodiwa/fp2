import React from 'react';

const renderWidgetData = (widgetData) => {
  return widgetData.map((data, idx) => {
    return (
      <div key={idx}>
        <label>Image</label>
        <input type="text" value={data.img} onChange={() => {}} />

        <label>Title</label>
        <input type="text" value={data.title} onChange={() => {}} />

        <label>Text</label>
        <input type="text" value={data.text} onChange={() => {}} />
      </div>
    )
  })
}

const CardsWidget = (props) => {
  const { widgetData } = props
  return (
    <div className="cards-widget">
      <label>Cards Widget</label>
      { renderWidgetData(widgetData) }
    </div>
  )
}

export default CardsWidget
