import React from 'react';

import WordCloudWidget from './widgets/WordCloudWidget'
import ShowcaseWidget from './widgets/ShowcaseWidget'
import TimelineWidget from './widgets/TimelineWidget'
import CardsWidget from './widgets/CardsWidget'

const WIDGET_TYPES = {
  WORD_CLOUD: 'wordcloud',
  TIMELINE: 'timeline',
  SHOWCASE: 'showcase',
  CARDS: 'cards'
}

const renderWidgetType = (field) => {
  const { WORD_CLOUD, CARDS, TIMELINE, SHOWCASE } = WIDGET_TYPES
  const { widgetData } = field.widget
  switch(field.widget.widgetType) {
    case WORD_CLOUD:
      return <WordCloudWidget widgetData={widgetData}/>
    case CARDS:
      return <CardsWidget widgetData={widgetData}/>
    case TIMELINE:
      return <TimelineWidget widgetData={widgetData}/>
    case SHOWCASE:
      return <ShowcaseWidget widgetData={widgetData}/>
    default:
      return 'default' 
  }
}

const Widget = (props) => {
  const { field } = props
  console.log(field.widget && field.widget.widgetType)

  if (!(field.widget && field.widget.widgetType)) {
    console.error('Widget not configured properly')
    return
  }

  return (
    <div className="widget">
      <label>Widget</label>
      { renderWidgetType(field) }
    </div>
  )
}

export default Widget
