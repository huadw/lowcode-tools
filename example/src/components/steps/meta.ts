import type { ComponentMetadata } from '@alilc/lowcode-types';

const InputMeta: ComponentMetadata = {
  group: '原子组件',
  category: '基础组件',
  componentName: 'Steps',
  title: 'Steps',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@knxcloud/example-component',
    version: '1.0.0',
    exportName: 'Steps',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'desc0',
        title: 'desc0',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: 'This is a description.',
        },
      },
      {
        name: 'desc1',
        title: 'desc1',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: 'This is a description.',
        },
      },
      {
        name: 'desc2',
        title: 'desc2',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: 'This is a description.',
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
      title: 'Steps',
      screenshot: 'http://192.168.10.211/icon/step.svg',
      schema: {
        componentName: 'Steps',
        props: {},
      },
    },
  ],
};

export default InputMeta;
