import React from 'react'
import Title from './fields/Title'
import Text from './fields/Text'
import Widgets from './Widgets'

const FIELD_TYPES = {
  TITLE: 'title',
  TEXT: 'text',
  WIDGET: 'widget'
}

export default class FormThingie extends React.Component {
  renderSections() {
    const { database } = this.props

    return database.sections.map((section) => {
      return (
        <div className="sections">
          Section
          { this.renderFields(section.fields) }
        </div>
      )
    })
  }

  renderFields(fields) {
    return fields.map(field => {
      return this.renderField(field)
    })
  }

  renderField(field) {
    const { TITLE, TEXT, WIDGET } = FIELD_TYPES

    switch(field.type) {
      case TITLE:
        return <Title field={field}/>;
      case TEXT:
        return <Text field={field}/>;
      case WIDGET:
        return <Widgets field={field}/>;
      default:
        return null;        
    }
  }

  render() {  
    return (
      <div className="form-database">
        <h3>All changes you make here will reflect on your site</h3>
        { this.renderSections() }
      </div>
    )
  }
}
