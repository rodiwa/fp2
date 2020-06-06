import React from 'react';

const renderItems = (items) => {
  return items.map(item => {
    return (
      <div>
        <label>Item Text</label>
        <input type="text" value={item.text} />
      </div>
    )
  })
}

const renderWidgetData = (widgetData) => {
  return widgetData.map(data => {
    const { meta, items } = data
    return (
      <div className="timeline-data">
        <div>
          <label>Meta</label>
          <input type="text" value={meta.year} />
          <input type="text" value={meta.group} />
          <input type="text" value={meta.future} />
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
