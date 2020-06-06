import React from 'react';

const Title = (props) => {
  const { field } = props
  return (
    <div className="text">
      <label>Text</label>
      <textarea rows="3" type="text" value={field.value} onChange={() => {}}/>
    </div>
  )
}

export default Title
