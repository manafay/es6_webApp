const htmlAttributes = ['accept',
'acceptCharset',
'accessKey',
'action',
'allowFullScreen',
'allowTransparency',
'alt',
'async',
'autoComplete',
'autoFocus',
'autoPlay',
'capture',
'cellPadding',
'cellSpacing',
'challenge',
'charSet',
'checked',
'cite',
'classID',
'className',
'colSpan',
'cols',
'content',
'contentEditable',
'contextMenu',
'controls',
'coords',
'crossOrigin',
'data',
'dateTime',
'default',
'defer',
'dir',
'disabled',
'download',
'draggable',
'encType',
'form',
'formAction',
'formEncType',
'formMethod',
'formNoValidate',
'formTarget',
'frameBorder',
'headers',
'height',
'hidden',
'high',
'href',
'hrefLang',
'htmlFor',
'httpEquiv',
'icon',
'id',
'inputMode',
'integrity',
'is',
'keyParams',
'keyType',
'kind',
'label',
'lang',
'list',
'loop',
'low',
'manifest',
'marginHeight',
'marginWidth',
'max',
'maxLength',
'media',
'mediaGroup',
'method',
'min',
'minLength',
'multiple',
'muted',
'name',
'noValidate',
'nonce',
'open',
'optimum',
'pattern',
'placeholder',
'poster',
'preload',
'profile',
'radioGroup',
'readOnly',
'rel',
'required',
'reversed',
'role',
'rowSpan',
'rows',
'sandbox',
'scope',
'scoped',
'scrolling',
'seamless',
'selected',
'shape',
'size',
'sizes',
'span',
'spellCheck',
'src',
'srcDoc',
'srcLang',
'srcSet',
'start',
'step',
'style',
'summary',
'tabIndex',
'target',
'title',
'type',
'useMap',
'value',
'width',
'wmode',
'wrap',
];


const transformAttribute = { className: 'class', htmlFor: 'for', onClick: 'on-click' };

const transformAttrKey = (key) => {
  if (Object.keys(transformAttribute).includes(key)) {
    return transformAttribute[key];
  }
  return key;
};

const isAllowedAttribute = (attr) => {
  const result = {};
  if (attr) {
    Object.keys(attr).forEach((key) => {
      if (typeof attr[key] === 'function') {
        result[`${transformAttrKey(key)}`] = attr[key];
      } else if (htmlAttributes.includes(key)) {
        result[`${key}`] = attr[key];
      }
    });
  }
  return result;
};

const getAttributes = (attr) =>
Object.keys(attr).map((key) => ` ${transformAttrKey(key)}="${attr[key]}"`).join(' ');

const fetchChildren = (children) => children.map((elem) => `${elem}`).join('\n');

function createElement(tag, props, ...args) {
  return `<${tag}${getAttributes(isAllowedAttribute(props))}>${fetchChildren(args)}</${tag}>`;
}


const child1 = createElement('li', null, 'Welcome to the world of React');
const child2 = createElement('li', null, 'Build Resuable components');
const className = { className: 'react', htmlFor: 'react-native', onClick: () => 'hello' };
console.log(createElement('h1', className, child1, child2));
