import React from 'react'

export default function weatherItem({ todo }) {
  return (
          <div className="jumbotron">
        <h1>Current weather in your location</h1>
        <p>
          <small>Temp: </small>
          <strong>{todo.temp}</strong>
        </p>
        <p>
          <small>pressure: </small>
          <strong>{todo.pressure}</strong>
        </p>
        <p>
          <small>humidity: </small>
          <strong>{todo.humidity}</strong>
        </p>
      </div>
  )
}
