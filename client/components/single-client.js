import React from 'react'

/**
 * COMPONENT
 */
export const SingleClient = props => {
  return (
    <div id="singleCard">
      <div id="images">
        <img src={props.picture} />
        <img src="https://i.stack.imgur.com/TLLAO.png" />
      </div>
      <div id="info">
        <p>
          NAME: {props.name_first} {props.name_last}
        </p>
        <p>EMAIL: {props.email}</p>
        <p>PHONE: {props.phone}</p>
      </div>
    </div>
  )
}
