import { render, waitFor } from '../../test-utils';
import { ComboBox } from './ComboBox';
import userEvent from '@testing-library/user-event';

const defaultItems = [
  { key: 'Apple', label: 'Apple' },
  { key: 'Bread', label: 'Bread' },
  { key: 'Car', label: 'Car' },
  { key: 'Doorbell', label: 'Doorbell' },
];

describe('Combobox', () => {
  it('should render an input and a button', () => {
    const screen = render(<ComboBox title={'Chose something'} />);
    expect(screen.getByRole('combobox')).toBeVisible();
    expect(screen.getByRole('button')).toBeVisible();
  });

  describe('with predefined items', () => {
    it('should show all options when clicking on the button', async () => {
      const screen = render(
        <ComboBox title={'Chose something'} items={defaultItems} />
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
        <ComboBox title={'Chose something'} items={defaultItems} />
      );
      userEvent.type(screen.getByRole('combobox'), 'Do');
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeVisible();
      });
      await waitFor(() => {
        expect(screen.getAllByRole('option')).toHaveLength(1);
      });
      expect(screen.getByRole('option', { name: /doorbell/i })).toBeVisible();
    });
  });

  describe('With fetched items', () => {
    const onItems = jest.fn(async () => defaultItems);

    afterEach(() => {
      onItems.mockClear();
    });

    it('should hide button when items is a function', () => {
      const onItems = jest.fn(async () => [{ key: 'A', label: 'A' }]);

      const screen = render(
        <ComboBox title={'Chose something'} items={onItems} />
      );

      expect(screen.queryByRole('button')).toBeNull();
    });
    it('should show all options when clicking on the button', async () => {
      const screen = render(
        <ComboBox title={'Chose something'} items={onItems} />
      );
      userEvent.type(screen.getByRole('combobox'), 'D');
      await waitFor(() => {
        expect(onItems).toHaveBeenCalledWith('D');
      });
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeVisible();
      });
      await waitFor(() => {
        expect(screen.getAllByRole('option')).toHaveLength(4);
      });
    });
  });

  it('should be possible to add a custom value', () => {
    const onSelect = jest.fn();
    const screen = render(
      <ComboBox
        title={'Chose something'}
        allowsCustomValue
        onSelect={onSelect}
      />
    );
    userEvent.type(screen.getByRole('combobox'), 'Papaya{Enter}');
    expect(onSelect).toHaveBeenCalledWith('Papaya');
  });

  it('should render as disabled when disabled is set', () => {
    const screen = render(<ComboBox title={'Chose something'} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should correctly set placeholder', () => {
    const screen = render(
      <ComboBox title={'Chose something'} placeholder={'Nothing chosen'} />
    );
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'placeholder',
      'Nothing chosen'
    );
  });

  it('should correctly hide label', () => {
    const screen = render(<ComboBox title={'Chose something'} hideLabel />);
    expect(screen.queryByText('Chose something')).toBeNull();
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'placeholder',
      'Chose something'
    );
  });

  it('should reset input value on select', () => {
    const screen = render(
      <ComboBox
        title={'Chose something'}
        allowsCustomValue
        resetInputOnSelect
      />
    );
    expect(screen.queryByRole('label')).toBeNull();
    userEvent.type(screen.getByRole('combobox'), 'Papaya{Enter}');
    expect(screen.getByRole('combobox')).toHaveValue('');
  });
});
