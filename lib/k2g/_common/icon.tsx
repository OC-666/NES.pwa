import { CSSProperties, FC, ReactNode } from 'react'

interface I_arrow_props {
  className?: string
  style?: CSSProperties
  size?: number
  direction?: 'up' | 'down' | 'left' | 'right' | number
}

export
const Arrow: FC<I_arrow_props> = props => {
  const size = props.size ?? 16
  return <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    className={props.className}
    style={props.style}
  >
    <polygon
      fill='currentColor'
      style={{
        transform: props.direction === undefined
          ? undefined
          : typeof(props.direction) === 'number'
            ? props.direction + 'deg'
            : ({
              up: undefined,
              down: '180deg',
              left: '-90deg',
              right: '90deg',
            })[props.direction]
      }}
      points={`${size/2}, 0 0,${size} ${size},${size}`} 
    />
  </svg>
}

interface I_line_props {
  unit2?: number
  type: 'top' | 'bottom' | 'left' | 'right'
    | 'left_top' | 'right_top' | 'left_bottom' | 'right_bottom'
  children: ReactNode
}

export
const Line: FC<I_line_props> = props => {
  const unit2 = props.unit2 || 16
  const unit = unit2 / 2
  const unit3 = unit * 3
  return <>
    {props.children}
    <svg
      width={{
        left: unit2, right: unit2, // 2n
        top: 1, bottom: 1, // 1px
        left_top: unit3, right_top: unit3, // 3n
        left_bottom: unit3, right_bottom: unit3,
      }[props.type]}
      height={{
        left: 1, right: 1, // 1px
        top: unit2, bottom: unit2, // 2n
        left_top: unit2, right_top: unit2, // 2n
        left_bottom: unit2, right_bottom: unit2,
      }[props.type]}
      style={{
        position: 'absolute',
        ...(() => {
          switch(props.type) {
            case 'left':
              return { right: '100%', top: '50%' }
            case 'right':
              return { left: '100%', top: '50%' }
            case 'top':
              return { bottom: '100%', left: '50%' }
            case 'bottom':
              return { top: '100%', left: '50%' }
            case 'left_top':
              return { right: '50%', bottom: '100%' }
            case 'right_top':
              return { left: '50%', bottom: '100%' }
            case 'left_bottom':
              return { right: '50%', top: '100%' }
            case 'right_bottom':
              return { left: '50%', top: '100%' }
          }
        })(),
      }}
    >
      <path stroke='currentColor' fill='none' d={(() => {
        switch(props.type) {
          case 'left': case 'right':
            return `M 0 0 H ${unit2}`
          case 'top': case 'bottom':
            return `M 0 0 V ${unit2}`
          case 'left_top':
            return `M 0 0 H ${unit2} L ${unit3} ${unit2}`
          case 'right_top':
            return `M 0 ${unit2} L ${unit} 0 H ${unit3}`
          case 'left_bottom':
            return `M 0 ${unit2} H ${unit2} L ${unit3} 0`
          case 'right_bottom':
            return `M 0 0 L ${unit} ${unit2} H ${unit3}`
        }
      })()} />
    </svg>
  </>
}

interface I_keyboard_props {
  size?: number
}

export
const Keyboard: FC<I_keyboard_props> = props => {
  const size = props.size || 24
  return <svg width={size} height={size} viewBox="0 0 48 48">
    <g fill="none"
      stroke="currentColor" strokeWidth="4"
      strokeLinejoin="round" strokeLinecap="round"
    >
      <rect x="4" y="18" width="40" height="24" rx="2" />
      <path d="M17 36H31" />
      <path d="M16 18 V12 H32 V 6" strokeWidth="2" />
    </g>
    <g fill="currentColor">
      <circle cx="14" cy="24" r="2"/>
      <circle cx="16" cy="30" r="2"/>
      <circle cx="10" cy="30" r="2"/>
      <circle cx="20" cy="24" r="2"/>
      <circle cx="22" cy="30" r="2" />
      <circle cx="26" cy="24" r="2" />
      <circle cx="28" cy="30" r="2" />
      <circle cx="32" cy="24" r="2" />
      <circle cx="34" cy="30" r="2" />
      <circle cx="38" cy="24" r="2" />
    </g>
  </svg>
}
