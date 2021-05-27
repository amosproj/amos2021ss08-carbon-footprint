/** Setting up login page
 * @author Mani Anand
 * @author Martin Wagner
 * */
 const converted = {
  body: { fontFamily: "Arial, Helvetica, sans-serif" },
  form: { border: "3px solid #f1f1f1" },
  "input[type=text], input[type=password]": {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  },
  button: {
    backgroundColor: "#04AA6D",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    cursor: "pointer",
    width: "100%"
  },
  "button:hover": { opacity: 0.8 },
  ".cancelbtn": {
    width: "auto",
    padding: "10px 18px",
    backgroundColor: "#f44336"
  },
  ".imgcontainer": { textAlign: "center", margin: "24px 0 12px 0" },
  "img.avatar": { width: "40%", borderRadius: "50%" },
  ".container": { padding: "16px" },
  "span.psw": { cssFloat: "right", paddingTop: "16px" },
  "@media screen and (max-width: 300px)": {
    "span.psw": { display: "block", cssFloat: "none" },
    ".cancelbtn": { width: "100%" }
  }
}
