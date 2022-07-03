import userEvent from '@testing-library/user-event';
import { render } from '../test-utils';
import { Menu } from './Menu';
import { MenuItem, MenuList } from './MenuList';

describe('Menu', () => {
  it('should render a Menu button', async () => {
    const screen = render(
      <Menu buttonProps={{ label: 'Click' }}>
        <MenuList>
          <MenuItem>A</MenuItem>
          <MenuItem>B</MenuItem>
          <MenuItem>C</MenuItem>
        </MenuList>
      </Menu>
    );
    expect(screen.getByRole('button')).toHaveTextContent('Click');
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByRole('menu')).toBeVisible();
  });
});
