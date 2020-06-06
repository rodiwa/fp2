import React from 'react';

const renderItems = (items) => {
  return items.map((item, idx) => {
    return (
      <div key={idx}>
        <label>Item Text</label>
        <input type="text" value={item.text} onChange={() => {}}/>
      </div>
    )
  })
}

const renderWidgetData = (widgetData) => {
  return widgetData.map((data, idx) => {
    const { meta, items } = data
    return (
      <div className="timeline-data" key={idx}>
        <div>
          <label>Meta</label>
          <input type="text" value={meta.year} onChange={() => {}}/>
          <input type="text" value={meta.group} onChange={() => {}}/>
          <input type="text" value={meta.future} onChange={() => {}}/>
        </div>

        <div>
          <label>Items</label>
          { renderItems(items) }
        </div>
      </div>
    )
  })
}

const TimelineWidget = (props) => {
  const { widgetData } = props
  return (
    <div className="timeline-widget">
      <label>Timeline Widget</label>
      { renderWidgetData(widgetData) }
    </div>
  )
}

export default TimelineWidget
