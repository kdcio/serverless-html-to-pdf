import fetch from 'node-fetch';
import input from '../fixtures/input.json';

describe('HTML to PDF', () => {
  it('should convert html to PDF', async () => {
    jest.setTimeout(10000);
    expect.assertions(1);
    const res = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    const json = await res.json();
    expect(json.data).toContain('JVBERi0xLjQKMSAwIG9iago8PAovVGl0bGUgKP7');
  });
});
