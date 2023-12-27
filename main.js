import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Color Scheme Generator</h1>
    <div>
      <input id="seed-color" name="seed-color" type="color"/>
      <select id="scheme-mode" name="scheme-mode">
        <option value="monochrome">monochrome</option>
        <option value="monochrome-dark">monochrome-dark</option>
        <option value="monochrome-light">monochrome-light</option>
        <option value="analogic">analogic</option>
        <option value="complement">complement</option>
        <option value="analogic-complement">analogic-complement</option>
        <option value="triad">triad</option>
        <option value="quad">quad</option>
      </select>
    </div>
  </div>
`

