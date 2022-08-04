import type { ComponentMetadata } from '@alilc/lowcode-types';

const InputMeta: ComponentMetadata = {
  group: '原子组件',
  category: '基础组件',
  componentName: 'Progress',
  title: 'Progress',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@knxcloud/example-component',
    version: '1.0.0',
    exportName: 'Progress',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'text0',
        title: 'text0',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      {
        name: 'text1',
        title: 'text1',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      {
        name: 'text2',
        title: 'text2',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      {
        name: 'text3',
        title: 'text3',
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
      title: 'Progress',
      screenshot: 'http://192.168.10.211/icon/Progress.svg',
      schema: {
        componentName: 'Progress',
        props: {},
      },
    },
  ],
};

export default InputMeta;
