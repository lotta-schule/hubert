import{r as s}from"./index.90767ddd.js";import{S as r}from"./Toolbar.be9144ab.js";import{a as c,j as e}from"./jsx-runtime.5f5c6c62.js";import"./clsx.m.256e9345.js";import"./NavigationButton.a60e963d.js";import"./Button.2cfaf172.js";import"./createSvgIcon.c6efc8b1.js";var y={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:5,line:14},endLoc:{col:1,line:28},startBody:{col:5,line:14},endBody:{col:1,line:28}}}}},title:"Layout/Stepper",component:r,argTypes:{}};const m=({args:a})=>{const n=o=>`https://avatars.dicebear.com/api/avataaars/${o}.svg`,[t,p]=s.exports.useState(2);return c("div",{children:[e(r,{currentStep:t,onStep:p,...a}),e("img",{src:n(t),alt:`Image Step ${t}`,style:{width:300}})]})},i=m.bind({});i.args={args:{maxSteps:4}};const x=["Default"];export{i as Default,x as __namedExportsOrder,y as default};
//# sourceMappingURL=Stepper.stories.6f9c5bae.js.map
