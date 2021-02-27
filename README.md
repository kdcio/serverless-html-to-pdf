# Serverless HTML to PDF API

This creates an API (AWS API Gateway and lambda) that converts HTML pages to PDF documents using [wkhtmltopdf](https://wkhtmltopdf.org/) (0.12.4). It implements a simple interface to read an HTML input and output PDF content.

This project is a fork of [zeplin/zeplin-html-to-pdf](https://github.com/zeplin/zeplin-html-to-pdf).

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/kdcio/serverless-html-to-pdf/Build%20and%20Test)](https://github.com/kdcio/serverless-html-to-pdf/actions/workflows/push.yml)

## Setup

```bash
git clone https://github.com/kdcio/serverless-html-to-pdf.git
cd serverless-html-to-pdf
npm install
```

## Run in local environment

Requires docker to simulate lambda environment.

```bash
npm start
```

## Usage

### API POST

```http
POST http://localhost:3000
Content-Type: application/json

{
  "html": "<!DOCTYPE html><html><head><title>HTML doc</title></head><body>Content</body></html>"
}
```

See [tests/api.http](tests/api.http) to try. You'll need to open this project on [VS Code](https://code.visualstudio.com/https://code.visualstudio.com/) with [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension for it to work.

### API Output

It yields a response in the following format:

```json
{
  "data": "JVBERi0xLjQKMSAwIG9iago8PAovVGl0bGUgKP7..."
}
```

`data` is base64 encoding of the converted PDF file.

### Example

Run example API client code in [example/client.js](example/client.js):

```bash
npm run client
```

This will generate `base64.pdf` file.

## Deploying to AWS

Deploy using your `default` AWS profile in `ap-southeast-1` region and `Asia/Manila` timezone.

```bash
npm run deploy
```

Customize the parameters by creating a config for your stage. For example, create the file `config.prod.yml` in the project root with the contents below.

```yml
REGION: us-east-1
PROFILE: production
TZ: America/New_York
```

To use that config file, run the command below:

```bash
npm run deploy prod
```

## Star Me

If you find this project useful, please consider giving a star. I would really appreciate it.

You can also:

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/default-yellow.png)](https://www.buymeacoffee.com/o4f0WYV)

## License

[MIT](LICENSE)
