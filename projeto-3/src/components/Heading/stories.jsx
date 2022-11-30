import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
  argsType: {
    children: {
      type: 'string',
    },
  },
};

export const template = (args) => <Heading {...args} />;
