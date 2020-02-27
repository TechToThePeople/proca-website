import React from "react"
import ReactDOM from "react-dom"
import SignatureForm from "./SignatureForm"
import FABAction from "./FAB.js"
//const querystring = require("querystring");

//console.log(querystring);

let config = {
  data: {},
  margin: "dense",
  variant: "filled",
  selector: "#signature-form",
}

const Button = args => {
  if (args) config = { ...config, ...args }
  if (!document.querySelector(config.selector)) {
    let elem = document.createElement("div")
    elem.id = "signature-button"
    config.selector = "#" + elem.id
    document.body.appendChild(elem)
  }
  ReactDOM.render(
    <FABAction {...config} />,
    document.querySelector(config.selector)
  )
}

const Dialog = args => {
  if (args) config = { ...config, ...args }
  if (!document.querySelector(config.selector)) {
    let elem = document.createElement("div")
    elem.id = "signature-buttonaaa"
    config.selector = "#" + elem.id
    document.body.appendChild(elem)
  }
  ReactDOM.render(
    <FABAction {...config} />,
    document.querySelector(config.selector)
  )
}

const Form = args => {
  if (args) config = { ...config, ...args }
  if (!document.querySelector(config.selector)) {
    let elem = document.createElement("div")
    elem.id = "signature-form"
    config.selector = "#" + elem.id
    document.body.appendChild(elem)
  }
  ReactDOM.render(
    <SignatureForm margin={config.margin} variant={config.variant} />,
    document.querySelector(config.selector)
  )
  return ""
}

export { config, Button, Form, Dialog }

//      <SignatureForm margin= "dense" variant= "filled" />
