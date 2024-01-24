# Environment Variables

- `VARIABLE_1`: Description of variable 1.
- `VARIABLE_2`: Description of variable 2.

Make sure to properly configure the environment variables in the `.env` file to avoid exposing sensitive information. Don't forget to add the `.env` file to your `.gitignore` to prevent it from being included in the repository.

## Notes

The use of `process.env` refers to environment variables, which are usually configured on the server to protect sensitive information. A `.env.example` file is provided as an example, and it is recommended to create a `.env` file with the appropriate environment variables for your local environment.

To simulate locally, use the `dotenv` package. Make sure to install the package with:

```bash
npm install dotenv
```

And include it at the beginning of your main script:

```javascript
require("dotenv").config();
```
