import React from 'react';

const renderWidgetData = (widgetData) => {
  return widgetData.map((item, idx) => {
    return (
      <div className="showcase-data" key={idx}>
        <div>
          <label>Item</label>
          <div className="row">
            <label>Title</label>
            <input type="text" value={item.title} onChange={() => {}} />
          </div>
          <div className="row">
            <label>Category</label>
            <input type="text" value={item.category} onChange={() => {}} />
          </div>
          <div className="row">
            <label>Client</label>
            <input type="text" value={item.client} onChange={() => {}} />
          </div>
          <div className="row">
            <label>Screen</label>
            <input type="text" value={item.screen} onChange={() => {}} />
          </div>
          <div className="row">
            <label>ClientLogo</label>
            <input type="text" value={item.clientLogo} onChange={() => {}} />
          </div>
          <div className="row">
            <label>Desc</label>
            <input type="text" value={item.desc} onChange={() => {}} />
          </div>
          <div className="row">
            <label>ShortDesc</label>
            <input type="text" value={item.shortDesc} onChange={() => {}} />
          </div>
          <div className="row">
            <label>Tools</label>
            <input type="text" value={item.tools} onChange={() => {}} />
          </div>
          <div className="row">
            <label>Img</label>
            <input type="text" value={item.img} onChange={() => {}} />
          </div>
          <div className="row">
            <label>Url</label>
            <input type="text" value={item.url} onChange={() => {}} />
          </div>
        </div>
      </div>
    )
  })
}

const ShowcaseWidget = (props) => {
  const { widgetData } = props
  return (
    <div className="showcase-widget">
      <label>Showcase Widget</label>
      { renderWidgetData(widgetData) }
    </div>
  )
}

export default ShowcaseWidget
