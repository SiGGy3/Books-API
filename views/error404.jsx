const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p></p>
        <img id="img2"
          src="/images/404-icecream-fall-error-page-260nw-1011388489.webp"
          alt="whoops you have a 404 error better luck next time"
        />
      </main>
    </Def>
  );
}

module.exports = error404;