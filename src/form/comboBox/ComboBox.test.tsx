import { render, waitFor } from '../../test-utils';
import { ComboBox } from './ComboBox';
import userEvent from '@testing-library/user-event';

import styles from './ComboBox.module.scss';

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
        expect(
          screen.getAllByRole('option').filter((li) => li.dataset.isFocused)
        ).toHaveLength(1);
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

  describe('onSelect', () => {
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
  });

  describe('reset input value on select', () => {
    it('should reset input value on select', async () => {
      const screen = render(
        <ComboBox
          title={'Chose something'}
          items={defaultItems}
          allowsCustomValue
        />
      );
      userEvent.type(screen.getByRole('combobox'), 'Apple{Enter}');
      await waitFor(() => {
        expect(screen.getByRole('combobox')).toHaveValue('');
      });
    });

    it('should not reset input value on select when noResetInputOnSelect is passed', () => {
      const screen = render(
        <ComboBox
          title={'Chose something'}
          items={defaultItems}
          allowsCustomValue
          noResetInputOnSelect
        />
      );
      userEvent.type(screen.getByRole('combobox'), 'Apple{Enter}');
      expect(screen.getByRole('combobox')).toHaveValue('Apple');
    });
  });

  describe('onSelect', () => {
    it('should call onSelect with item key when a proposed option is selected', async () => {
      const onSelect = jest.fn();
      const screen = render(
        <ComboBox
          title={'Chose something'}
          items={defaultItems}
          onSelect={onSelect}
        />
      );
      await waitFor(() => {
        userEvent.click(screen.getByRole('button', { name: /vorschläge/i }));
      });
      await waitFor(() => {
        expect(screen.getByRole('option', { name: /apple/i })).toBeVisible();
      });
      userEvent.click(screen.getByRole('option', { name: /apple/i }));
      expect(onSelect).toHaveBeenCalledWith('Apple');
    });

    it('should call onSelect with item key when the value of a proposed item is typed', async () => {
      const onSelect = jest.fn();
      const screen = render(
        <ComboBox
          title={'Chose something'}
          items={defaultItems}
          onSelect={onSelect}
        />
      );
      userEvent.type(screen.getByRole('combobox'), 'Apple{Enter}');
      await waitFor(() => {
        expect(onSelect).toHaveBeenCalledWith('Apple');
      });
    });

    it('should not call onSelect when the value of an unpropsed item is entered', () => {
      const onSelect = jest.fn();
      const screen = render(
        <ComboBox
          title={'Chose something'}
          items={defaultItems}
          onSelect={onSelect}
        />
      );
      userEvent.type(screen.getByRole('combobox'), 'Dragonfruit{Enter}');
      expect(onSelect).not.toHaveBeenCalled();
    });

    describe('custom properties', () => {
      it('should call onSelect when selecting an unpropsed item when allowsCustomValue is passed', () => {
        const onSelect = jest.fn();
        const screen = render(
          <ComboBox
            allowsCustomValue
            title={'Chose something'}
            items={defaultItems}
            onSelect={onSelect}
          />
        );
        userEvent.type(screen.getByRole('combobox'), 'Dragonfruit{Enter}');
        expect(onSelect).toHaveBeenCalledWith('Dragonfruit');
      });
    });

    describe('closing the listbox', () => {
      it('should not close the listbox on select when predefined items are passed (as array)', async () => {
        const screen = render(
          <ComboBox
            title={'Chose something'}
            items={defaultItems}
            onSelect={jest.fn()}
          />
        );
        userEvent.click(screen.getByRole('button', { name: /vorschläge/i }));
        await waitFor(() => {
          expect(screen.getByRole('option', { name: /apple/i })).toBeVisible();
        });
        userEvent.click(screen.getByRole('option', { name: /apple/i }));
        waitFor(() => {
          expect(screen.queryByRole('option', { name: /apple/i })).toBeNull();
        });
      });
      it('should not close the listbox on select when dynamic items are passed (as callback)', async () => {
        const screen = render(
          <ComboBox
            title={'Chose something'}
            items={async () => defaultItems}
            onSelect={jest.fn()}
          />
        );
        userEvent.type(screen.getByRole('combobox'), 'Apple{Enter}');
        await waitFor(() => {
          expect(screen.getByRole('option', { name: /apple/i })).toBeVisible();
        });
        expect(screen.getByRole('option', { name: /apple/i })).toBeVisible();
      });
    });
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
    expect(screen.queryByRole('label')).toBeNull();
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'placeholder',
      'Chose something'
    );
  });

  it('should add fullWidth class', () => {
    const screen = render(<ComboBox fullWidth title={'Chose something'} />);
    expect(screen.baseElement.querySelector(`.${styles.root}`)).toHaveClass(
      styles.isFullWidth
    );
  });
});
