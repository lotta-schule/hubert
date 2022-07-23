import userEvent from '@testing-library/user-event';
import { render, waitFor } from '../../test-utils';
import { ComboBox } from './Combobox';

describe('Combobox', () => {
  it('should render an input and a button', () => {
    const screen = render(<ComboBox title={'Chose something'} />);
    expect(screen.getByRole('combobox')).toBeVisible();
    expect(screen.getByRole('button')).toBeVisible();
  });

  describe('with predefined items', () => {
    it('should show all options when clicking on the button', async () => {
      const screen = render(
        <ComboBox
          title={'Chose something'}
          items={[
            { key: 'A', label: 'A' },
            { key: 'B', label: 'B' },
            { key: 'C', label: 'C' },
            { key: 'D', label: 'D' },
          ]}
        />
      );
      expect(screen.getByRole('combobox')).toBeVisible();
      userEvent.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeVisible();
      });
      expect(screen.getAllByRole('option')).toHaveLength(4);
    });

    it('should filter items when text is entered', async () => {
      const screen = render(
        <ComboBox
          title={'Chose something'}
          items={[
            { key: 'Apple', label: 'Apple' },
            { key: 'Bread', label: 'Bread' },
            { key: 'Car', label: 'Car' },
            { key: 'Doorbell', label: 'Doorbell' },
          ]}
        />
      );
      userEvent.type(screen.getByRole('combobox'), 'Do');
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeVisible();
      });
      expect(screen.getAllByRole('option')).toHaveLength(1);
      expect(screen.getByRole('option', { name: /doorbell/i })).toBeVisible();
    });
  });

  describe('With fetched items', () => {
    it('should hide button when items is a function', () => {
      const onItems = jest.fn(async () => [{ key: 'A', label: 'A' }]);

      const screen = render(
        <ComboBox title={'Chose something'} items={onItems} />
      );

      expect(screen.queryByRole('button')).toBeNull();
    });
    it('should show all options when clicking on the button', async () => {
      const onItems = jest.fn(async () => {
        return [
          { key: 'A', label: 'A' },
          { key: 'B', label: 'B' },
          { key: 'C', label: 'C' },
          { key: 'D', label: 'D' },
        ];
      });
      const screen = render(
        <ComboBox title={'Chose something'} items={onItems} />
      );
      userEvent.type(screen.getByRole('combobox'), 'D');
      await waitFor(() => {
        expect(onItems).toHaveBeenCalledWith('D');
      });
      /* TODO:
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeVisible();
      });
      await waitFor(() => {
        expect(screen.getAllByRole('option')).toHaveLength(4);
      });
         */
    });
  });
});
