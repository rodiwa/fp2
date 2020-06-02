import React from 'react';

const renderWidgetData = (widgetData) => {
  return widgetData.map(item => {
    return (
      <div className="showcase-data">
        <div>
          <label>Item</label>
          <div className="row">
            <label>Title</label>
            <input type="text" value={item.title} />
          </div>
          <div className="row">
            <label>Category</label>
            <input type="text" value={item.category} />
          </div>
          <div className="row">
            <label>Client</label>
            <input type="text" value={item.client} />
          </div>
          <div className="row">
            <label>Screen</label>
            <input type="text" value={item.screen} />
          </div>
          <div className="row">
            <label>ClientLogo</label>
            <input type="text" value={item.clientLogo} />
          </div>
          <div className="row">
            <label>Desc</label>
            <input type="text" value={item.desc} />
          </div>
          <div className="row">
            <label>ShortDesc</label>
            <input type="text" value={item.shortDesc} />
          </div>
          <div className="row">
            <label>Tools</label>
            <input type="text" value={item.tools} />
          </div>
          <div className="row">
            <label>Img</label>
            <input type="text" value={item.img} />
          </div>
          <div className="row">
            <label>Url</label>
            <input type="text" value={item.url} />
          </div>
        </div>
      </div>
    )
  })
}

const ShowcaseWidget = (props) => {
  const { widgetData } = props
  console.log(widgetData)
  return (
    <div className="showcase-widget">
      <label>Showcase Widget</label>
      { renderWidgetData(widgetData) }
    </div>
  )
}

export default ShowcaseWidget
