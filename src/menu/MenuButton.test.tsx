import userEvent from '@testing-library/user-event';
import { render } from '../test-utils';
import { MenuButton } from './MenuButton';
import { Item } from './MenuItem';

describe('Menu', () => {
  it('should render a Menu button', async () => {
    const screen = render(
      <MenuButton title={'Test Menu'} buttonProps={{ label: 'Click' }}>
        <Item key={'a'}>A</Item>
        <Item key={'b'}>B</Item>
        <Item key={'c'}>C</Item>
      </MenuButton>
    );
    expect(screen.getByRole('button')).toHaveTextContent('Click');
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByRole('menu')).toBeVisible();
  });
});
