import React from 'react';

const Title = (props) => {
  const { field } = props
  return (
    <div className="title">
      <label>Title</label>
      <input type="text" value={field.value} />
    </div>
  )
}

export default Title
