import{r as o,a as c,j as e}from"./jsx-runtime.8b53cab7.js";import{S as a}from"./Toolbar.29cdba22.js";import"./iframe.46d5377a.js";import"./clsx.m.256e9345.js";import"./NavigationButton.83cefbfb.js";import"./Button.9d49bc05.js";import"./createSvgIcon.426d63da.js";const v={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:5,line:14},endLoc:{col:1,line:28},startBody:{col:5,line:14},endBody:{col:1,line:28}}}}},title:"Layout/Stepper",component:a,argTypes:{}},m=({args:r})=>{const n=s=>`https://avatars.dicebear.com/api/avataaars/${s}.svg`,[t,p]=o.exports.useState(2);return c("div",{children:[e(a,{currentStep:t,onStep:p,...r}),e("img",{src:n(t),alt:`Image Step ${t}`,style:{width:300}})]})},i=m.bind({});i.args={args:{maxSteps:4}};const x=["Default"];export{i as Default,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Stepper.stories.2a60b7b1.js.map
