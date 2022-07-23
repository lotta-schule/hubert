import * as React from 'react';
import { Menu, Book } from '@material-ui/icons';
import { ItemProps } from '@react-types/shared';
import { Item } from '../menu';
import { render } from '../test-utils';
import {
  ListItemPreliminary,
  ListItemPreliminaryItem,
} from './ListItemFactory';

describe('list/ListItemFactory', () => {
  describe('create Item', () => {
    it('should render an item with complete information for a listItem', () => {
      const preliminaryItem: ListItemPreliminaryItem = {
        key: 'test',
        label: 'Test',
        leftSection: <Menu />,
        rightSection: <Book />,
        description: 'Test description',
      };

      const item = ListItemPreliminary.createItem(preliminaryItem);

      expect(item.key).toEqual('test');
      expect(item.type).toBe(Item);
      expect(item.props['aria-label']).toEqual('Test');
      expect(
        (item.props as ItemProps<ListItemPreliminaryItem>).textValue
      ).toEqual('Test');
      expect(item.props.children).toHaveLength(4);
      expect(
        React.Children.toArray(item.props.children!).find(
          (child: React.ReactNode) => child === 'Test'
        )
      ).toBeTruthy();
    });

    it('should also have four children for minimal information for a listItem', () => {
      const preliminaryItem: ListItemPreliminaryItem = {
        key: 'test',
        label: 'Test',
      };

      const item = ListItemPreliminary.createItem(preliminaryItem);

      expect(item.key).toEqual('test');
      expect(item.props.children).toHaveLength(4);
    });
  });

  describe('create ListItem', () => {
    it('should render a listItem with complete information from an item', () => {
      const screen = render(
        ListItemPreliminary.createListItem({
          rendered: ListItemPreliminary.createItem({
            key: 'test',
            label: 'Test',
            leftSection: <Menu />,
            rightSection: <Book />,
            description: 'Test description',
          }).props.children,
        } as any)
      );
      expect(screen.container).toMatchInlineSnapshot(`
        <div>
          <div
            data-overlay-container="true"
          >
            <li
              class="li"
            >
              <div>
                <span>
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                    />
                  </svg>
                </span>
              </div>
              <div
                class="mainSection"
              >
                <div>
                  Test
                </div>
                <span>
                  Test description
                </span>
              </div>
              <div>
                Test description
              </div>
            </li>
          </div>
        </div>
      `);
    });

    it('should render a listItem with complete information from an item', () => {
      const screen = render(
        ListItemPreliminary.createListItem({
          rendered: ListItemPreliminary.createItem({
            key: 'test',
            label: 'Test',
          }).props.children,
        } as any)
      );
      expect(screen.container).toMatchInlineSnapshot(`
        <div>
          <div
            data-overlay-container="true"
          >
            <li
              class="li"
            >
              <div>
                <span />
              </div>
              <div
                class="mainSection"
              >
                <div>
                  Test
                </div>
              </div>
            </li>
          </div>
        </div>
      `);
    });
  });
});
