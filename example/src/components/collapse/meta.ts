import type { ComponentMetadata } from '@alilc/lowcode-types';

const InputMeta: ComponentMetadata = {
  group: '原子组件',
  category: '表单组件',
  componentName: 'Collapse',
  title: 'Collapse',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@knxcloud/example-component',
    version: '1.0.0',
    exportName: 'Collapse',
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
          initialValue: '111',
        },
      },
      {
        name: 'test',
        title: 'test',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '222',
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
      title: 'Collapse',
      screenshot: '',
      schema: {
        componentName: 'Collapse',
        props: {},
      },
    },
  ],
};

export default InputMeta;
