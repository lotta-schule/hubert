import { render } from '@testing-library/react';
import { Button } from '../../button/Button';
import { Tooltip } from './Tooltip';
import userEvent from '@testing-library/user-event';

describe('util/Tooltip', () => {
  it('should render', () => {
    const screen = render(
      <Tooltip label="Test">
        <Button>Test</Button>
      </Tooltip>
    );
    expect(screen.container).toMatchSnapshot();
  });

  it('should keep a button clickable', () => {
    const onClick = jest.fn();
    const screen = render(
      <Tooltip label="Test">
        <Button onClick={onClick}>Test</Button>
      </Tooltip>
    );
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
