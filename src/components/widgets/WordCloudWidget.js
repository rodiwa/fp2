import React from 'react';

const renderWidgetData = (widgetData) => {
  return widgetData.map((data, idx) => {
    return (
      <div key={idx}>
        <label>Word</label>
        <input type="text" value={data.title} onChange={() => {}} />

        <label>Priority</label>
        <input type="number" value={data.size} onChange={() => {}} />
      </div>
    )
  })
}

const WordCloudWidget = (props) => {
  const { widgetData } = props
  return (
    <div className="word-cloud-widget">
      <label>Word Cloud Widget</label>
      { renderWidgetData(widgetData) }
    </div>
  )
}

export default WordCloudWidget
