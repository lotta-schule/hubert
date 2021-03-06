import userEvent from '@testing-library/user-event';
import { render } from '../test-utils';
import { Tag } from './Tag';

describe('Tag', () => {
  it('should correctly render a tag', () => {
    render(<Tag>Tag</Tag>);
  });

  it('should show a Delete Button when a onDelete prop is given', () => {
    const fn = jest.fn();
    const screen = render(<Tag onDelete={fn}>Tag</Tag>);
    const deleteButton = screen.getByRole('button', {
      name: 'Tag Tag löschen',
    });
    expect(deleteButton).toBeVisible();
    userEvent.click(deleteButton);
    expect(fn).toHaveBeenCalled();
  });
});
