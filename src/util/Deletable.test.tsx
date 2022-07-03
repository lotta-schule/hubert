import userEvent from '@testing-library/user-event';
import { render } from '../test-utils';
import { Deletable } from './Deletable';

describe('shared/general/util/Deletable', () => {
    it('should show a Delete button when onDelete is given', () => {
        const onDelete = jest.fn();
        const screen = render(
            <Deletable onDelete={onDelete}>
                <img width={300} height={300} alt={''} />
            </Deletable>
        );
        expect(screen.getByRole('button')).toBeVisible();
        userEvent.click(screen.getByRole('button'));
        expect(onDelete).toHaveBeenCalled();
    });
    it('should not show a Delete button when onDelete is not given', () => {
        const screen = render(
            <Deletable>
                <img width={300} height={300} alt={''} />
            </Deletable>
        );
        expect(screen.queryByRole('button')).toBeNull();
    });
});
