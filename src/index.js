process.env.PATH = `${process.env.PATH}:${process.env.LAMBDA_TASK_ROOT}/bin/linux`;
import parser from '@kdcio/api-gw-req';
import response from '@kdcio/api-gw-resp';
import debug from 'debug';
import wkHtmlToPDF from './utils/wkhtmltopdf';

export const handler = async (event) => {
  debug('lambda:event')(JSON.stringify(event));
  try {
    const request = parser(event);
    if (!request.body || !request.body.html) {
      return response.BAD_REQUEST({
        message: "Validation error: Missing field 'html'.",
      });
    }

    const { html } = request.body;
    const buffer = await wkHtmlToPDF(html);
    return response.OK({
      body: {
        data: buffer.toString('base64'),
      },
    });
  } catch (error) {
    debug('lambda:error')(error);
    return response.SERVER_ERROR({ message: error.message });
  }
};
