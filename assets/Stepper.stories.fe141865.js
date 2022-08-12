import{r as s}from"./index.848129ac.js";import{S as r}from"./Toolbar.7714a43e.js";import{a as c,j as e}from"./jsx-runtime.3eeaf793.js";import"./iframe.08a327df.js";import"./clsx.m.256e9345.js";import"./NavigationButton.2aea4d55.js";import"./Button.31d178aa.js";import"./createSvgIcon.8aa67882.js";const x={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Stepper.stories.fe141865.js.map
