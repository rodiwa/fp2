import React from 'react';

const renderWidgetData = (widgetData) => {
  return widgetData.map(data => {
    return (
      <div>
        <label>Word</label>
        <input type="text" value={data.title} />

        <label>Priority</label>
        <input type="number" value={data.size} />
      </div>
    )
  })
}

const WordCloudWidget = (props) => {
  const { widgetData } = props
  console.log(widgetData)
  return (
    <div className="word-cloud-widget">
      <label>Word Cloud Widget</label>
      { renderWidgetData(widgetData) }
    </div>
  )
}

export default WordCloudWidget
