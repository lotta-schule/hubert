import{r as s}from"./index.92f5a256.js";import{S as r}from"./Toolbar.06b8519c.js";import{a as c,j as e}from"./jsx-runtime.e37de2b3.js";import"./iframe.0870ca85.js";import"./clsx.m.256e9345.js";import"./NavigationButton.6caa978f.js";import"./Button.a4f68b89.js";import"./createSvgIcon.d8fe52fb.js";const x={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Stepper, StepperProps } from '../../layout';

export default {
  title: 'Layout/Stepper',
  component: Stepper,
  argTypes: {},
} as Meta;

const Template: Story<{
  args: Omit<StepperProps, 'currentStep' | 'onStep'>;
  content: React.ReactElement;
}> = ({ args }) => {
  const getRandomAvatarUrl = (step: number) =>
    \`https://avatars.dicebear.com/api/avataaars/\${step}.svg\`;
  const [step, setStep] = React.useState(2);
  return (
    <div>
      <Stepper currentStep={step} onStep={setStep} {...args} />
      <img
        src={getRandomAvatarUrl(step)}
        alt={\`Image Step \${step}\`}
        style={{ width: 300 }}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  args: {
    maxSteps: 4,
  },
};
`,locationsMap:{default:{startLoc:{col:5,line:14},endLoc:{col:1,line:28},startBody:{col:5,line:14},endBody:{col:1,line:28}}}}},title:"Layout/Stepper",component:r,argTypes:{}},m=({args:a})=>{const n=p=>`https://avatars.dicebear.com/api/avataaars/${p}.svg`,[t,o]=s.exports.useState(2);return c("div",{children:[e(r,{currentStep:t,onStep:o,...a}),e("img",{src:n(t),alt:`Image Step ${t}`,style:{width:300}})]})},i=m.bind({});i.args={args:{maxSteps:4}};const R=["Default"];export{i as Default,R as __namedExportsOrder,x as default};
//# sourceMappingURL=Stepper.stories.e0a219be.js.map
