import { CSSProperties, FC, } from 'react'

interface I_arrow_props {
  style?: CSSProperties
  size?: number
  direction?: 'up' | 'down' | 'left' | 'right' | number
}

export
const Arrow: FC<I_arrow_props> = props => {
  const size = props.size ?? 16
  return <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox={`0 0 ${size} ${size}`}
    className='arrow'
    style={props.style}
  >
    <polygon
      fill='currentColor'
      style={{
        transformOrigin: 'center',
        transform: props.direction === undefined
          ? undefined
          : `rotate(${
            typeof(props.direction) === 'number'
              ? props.direction + 'deg'
              : ({
                up: undefined,
                down: '180deg',
                left: '-90deg',
                right: '90deg',
              })[props.direction]
            })`,
      }}
      points={`${size/2}, 0 0,${size} ${size},${size}`} 
    />
  </svg>
}
