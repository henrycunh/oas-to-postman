import { Handler } from '@netlify/functions'
import axios from 'axios'
const Converter = require('openapi-to-postmanv2')

const handler: Handler = async (event, context) => {
    const response = (content: any) => ({ statusCode: 200, body: JSON.stringify(content) })
    const throwError = (message: string) => response({ error: true, message })

    const { url } = event.queryStringParameters
    if (!url) {
        return throwError(`No OpenAPI file provided. Use the ?url query parameter to pass a valid and fetchable file URL!`)
    }
    try {
        const { data: openApiContent } = await axios.get(url as string)
        const { result, reason, output } = await Converter.convert({ type: 'string', data: openApiContent }, {}, (err, result) => result)
        if (!result) {
            return throwError(reason)
        } else {
            return response(output.pop().data)
        }
    } catch (error) {
        return throwError(error.message)
    }
}

export { handler }