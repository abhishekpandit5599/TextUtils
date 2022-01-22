import React, { useState } from "react";

export default function TextInput(props) {
  function textAreaBG() {
    if (props.mode === "dark") {
      return "#03111e";
    } else if (props.mode === "darkGreen") {
      return "#022405";
    } else {
      return "white";
    }
  }

  function changeState(e) {
    setText(e.target.value);
  }

  function changeUperCase(e) {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Convert to Upper Case Successfully.");
  }
  function changeLowerCase(e) {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Convert to Lower Case Successfully.");
  }
  function clrText(e) {
    let newText = "";
    setText(newText);
    setExtractEMail(newText);
    props.showAlert("success", "Clear Text Successfully.");
  }
  function extractEmail(e) {
    let textArray = text.split(" ");
    let reg = /^([0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-z]+)$/;
    let emails = "";
    textArray.forEach(function (element) {
      if (reg.test(element)) {
        emails += `${element} `;
      }
    });
    setExtractEMail(emails);
    props.showAlert("success", "Email Extract Successfully.");
  }

  function removeExtraSpace(e) {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Remove White Successfully.");
  }

  const [text, setText] = useState("");
  const [extractEMail, setExtractEMail] = useState("");
  return (
    <div className="main">
      <div
        className="container"
        style={{
          color: `${
            props.mode === "dark" || props.mode === "darkGreen"
              ? "white"
              : "black"
          }`,
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>Text Area</h1>
          </label>
          <textarea
            value={text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={changeState}
            style={{
              backgroundColor: textAreaBG(),
              color: `${
                props.mode === "dark" || props.mode === "darkGreen"
                  ? "white"
                  : "black"
              }`,
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "darkGreen" ? "success" : "primary"
          } mx-2 my-2`}
          onClick={changeUperCase}
        >
          Change to Upper Case
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "darkGreen" ? "success" : "primary"
          } mx-2 my-2`}
          onClick={changeLowerCase}
        >
          Change to Lower Case
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "darkGreen" ? "success" : "primary"
          } mx-2 my-2`}
          onClick={clrText}
        >
          Clear Text
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "darkGreen" ? "success" : "primary"
          } mx-2 my-2`}
          onClick={extractEmail}
        >
          Extract Email
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-${
            props.mode === "darkGreen" ? "success" : "primary"
          } mx-2 my-2`}
          onClick={removeExtraSpace}
        >
          Remove Extra Spaces
        </button>

        <h4>Summary of Text</h4>
        <p>
          {text.length} Characters and{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words
        </p>
        <h5>Extract Email</h5>
        <p>{extractEMail}</p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}
