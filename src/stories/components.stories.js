import { centerScreen } from "../../.storybook/decorators";

export default {
  title: 'Controls',
  decorators: [centerScreen]
};

export const Button = () => require('../html/button.html')
export const Dropdown = () => require('../html/dropdown.html')