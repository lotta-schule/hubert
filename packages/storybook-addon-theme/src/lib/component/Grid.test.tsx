import * as React from 'react';
import { render } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid', () => {
  it('should render', () => {
    const screen = render(<Grid columns={3} />);

    expect(screen.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="css-19w2m54"
        />
      </div>
    `);
  });
});
