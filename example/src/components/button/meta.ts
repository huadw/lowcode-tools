import type { ComponentMetadata } from '@alilc/lowcode-types';

const InputMeta: ComponentMetadata = {
  group: '原子组件',
  category: '基础组件',
  componentName: 'Button',
  title: 'Button',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@knxcloud/example-component',
    version: '1.0.0',
    exportName: 'Button',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'text',
        title: 'text',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
  snippets: [
    {
      title: 'button',
      screenshot: 'http://192.168.10.211/icon/button.svg',
      schema: {
        componentName: 'Button',
        props: {},
      },
    },
  ],
};

export default InputMeta;
