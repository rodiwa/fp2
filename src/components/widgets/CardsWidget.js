import React from 'react';

const renderWidgetData = (widgetData) => {
  return widgetData.map(data => {
    return (
      <div>
        <label>Image</label>
        <input type="text" value={data.img} />

        <label>Title</label>
        <input type="text" value={data.title} />

        <label>Text</label>
        <input type="text" value={data.text} />
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
