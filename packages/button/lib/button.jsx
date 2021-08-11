import React, { useMemo } from 'react';
import './style/index.less';
import { createNamespace } from 'utils';

export const BORDER = 'van-hairline';
export const BORDER_SURROUND = `${BORDER}--surround`;

const [name, bem] = createNamespace('button');

const getStyle = (color, plain) => {
  if (color) {
    const style = {
      color: plain ? color : 'white',
    };

    if (!plain) {
      style.background = color;
    }

    if (color.includes('gradient')) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }

    return style;
  }
};
const renderText = props => {
  const { loading, loadingText = 'loading', text, children = 'submit' } = props;
  let computedText;

  if (loading) {
    computedText = loadingText;
  } else if (text) {
    computedText = text;
  } else {
    computedText = children;
  }

  return <span className={`${bem('text')}`}>{computedText}</span>;
};
function Button(props) {
  const {
    type = 'default',
    size = 'normal',
    color,
    click,
    plain,
    block,
    round,
    square,
    loading,
    disabled,
    hairline,
  } = props;

  // 点击事件
  const clickHandle = event => {
    if (click) {
      click(event);
    }
  };
  const style = useMemo(() => getStyle(color, plain), [color, plain]);
  const classes = [
    bem([
      type,
      size,
      {
        plain,
        block,
        round,
        square,
        loading,
        disabled,
        hairline,
      },
    ]),
  ];
  console.log('classes: ', classes);
  return (
    <div className={classes} onClick={clickHandle}>
      <div className={`${bem('content')}`}>{renderText(props)}</div>
    </div>
  );
}
export default Button;
