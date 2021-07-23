import React from "react"
import Part from "./Part"

const Content = (props) => {
  const parts = props.parts.map(part => <Part part={part.name} exercises={part.exercises} />)

  return (
    <div>
      {parts}
    </div>
  )
}

export default Content
