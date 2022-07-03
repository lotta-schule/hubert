import {render} from '../test-utils';
import { Popover } from './Popover';

describe('Popover', () => {
    it('should render', () => {
        const screen = render(
            <Popover>
            <div>TADA</div>
            </Popover>
        );
        expect(screen.container).toMatchInlineSnapshot(`
<div>
  <div
    data-overlay-container="true"
  >
    <button
      aria-selected="false"
      class="lotta-base-button variant__default lotta-button"
      role="button"
      type="button"
    />
  </div>
</div>
`);
    });
});
