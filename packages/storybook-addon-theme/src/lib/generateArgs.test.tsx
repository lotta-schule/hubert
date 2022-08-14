import { generateArgs } from './generateArgs';

describe('generateArgs', () => {
  it('should generate correct color arg from schema', () => {
    expect(generateArgs().boxBackgroundColor).toMatchInlineSnapshot(`
      Object {
        "control": Object {
          "type": "color",
        },
        "description": "Box background color",
        "key": "boxBackgroundColor",
        "name": "boxBackgroundColor",
        "type": Object {
          "name": "string",
          "required": true,
        },
      }
    `);
  });
});
