<div align="center">
    <img src="./assets/logo.png" width="600" />
    <div>
      <strong align="center">OAS 2 Postman</strong>
    </div>
    <div align="center">
      Convert OpenAPI specification files to Postman Collections
    </div>
    </br>
    <a href="https://oas2pm.abaca.team">
    <img src="https://img.shields.io/static/v1?label=live&message=demo&color=green&style=for-the-badge" />
    </a>
</div>
</br>

---

</br>


<details open="open">
  <summary><strong style="display: inline-block">Table of Contents</strong></summary>
  
  1. [Overview](#overview)
  1. [Development](#development)
  
</details>

## Using

You can simply prepend `oas2pm.abaca.team?url=` to any OpenAPI specification url!

## Development

- Clone the repository and install the dependencies
    ```sh
    yarn
    # or
    npm i
    ```
- Run the Netlify development server
  ```sh
  yarn dev
  ```
- Access the endpoint
    - By default it's located at http://localhost:8888/.netlify/functions/convert