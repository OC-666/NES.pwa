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

type I_position = 'top' | 'bottom' | 'left' | 'right'
  | 'left_top' | 'right_top' | 'left_bottom' | 'right_bottom'

interface I_line2kb_props {
  type: I_position
  target: string
}

const format_keyname = (key: string) =>
  (key.length === 4 && key.indexOf('Key') === 0)
    ? key.slice(3)
    : key

export
const Line2kb: FC<I_line2kb_props> = props =>
  <div
    className='line2kb'
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
    <Line type={props.type} />
    <div style={{
      position: 'absolute',
      ...(() => {
        switch(props.type) {
          case 'left':
            return { right: '100%', top: 0, transform: 'translateY(-50%)' }
          case 'right':
            return { left: '100%', top: 0, transform: 'translateY(-50%)' }
          case 'top':
            return { bottom: '100%', left: 0, transform: 'translateX(-50%)' }
          case 'bottom':
            return { top: '100%', left: 0, transform: 'translateX(-50%)' }
          case 'left_bottom':
            return { right: '100%', top: '100%', transform: 'translateY(-50%)' }
          case 'left_top':
            return { right: '100%', top: 0, transform: 'translateY(-50%)' }
          case 'right_bottom':
            return { left: '100%', top: '100%', transform: 'translateY(-50%)' }
          case 'right_top':
            return { left: '100%', top: 0, transform: 'translateY(-50%)' }
        }
      })(),
    }}>
      {/* 注意：上面的 div 提供定位，下面的 div 提供样式 */}
      <div className={'label'}>
        <Keyboard />
        <span>{format_keyname(props.target)}</span>
      </div>
    </div>
  </div>

interface I_line_props {
  type: I_position
}

const Line: FC<I_line_props> = props =>
  // const unit = 8
  <svg
    className={{
      left: 'h-line', right: 'h-line',
      top: 'v-line', bottom: 'v-line',
      left_top: 'line', right_top: 'line',
      left_bottom: 'line', right_bottom: 'line',
    }[props.type]}
    viewBox={`0 0
      ${{
        left: 16, right: 16, // 2n
        top: 3, bottom: 3, // 3px
        left_top: 24, right_top: 24, // 3n
        left_bottom: 24, right_bottom: 24,
      }[props.type]}
      ${{
        left: 3, right: 3, // 3px
        top: 16, bottom: 16, // 2n
        left_top: 16, right_top: 16, // 2n
        left_bottom: 16, right_bottom: 16,
      }[props.type]}
    `}
  >
    <path stroke='currentColor' fill='none' d={(() => {
      switch(props.type) {
        case 'left': case 'right':
          return `M 0 1 H 16`
        case 'top': case 'bottom':
          return `M 1 0 V 16`
        case 'left_top':
          return `M 0 1 H 15 L 23 16` // 具体数值是多少还是得观察
        case 'right_top':
          return `M 1 16 L 8 1 H 23`
        case 'left_bottom':
          return `M 0 15 H 15 L 23 0`
        case 'right_bottom':
          return `M 1 0 L 8 15 H 23`
      }
    })()} />
  </svg>

export
const Keyboard: FC = () =>
  <svg viewBox='0 0 48 48' className='keyboard'>
    <g fill="none"
      stroke="currentColor" strokeWidth="4"
      strokeLinejoin="round" strokeLinecap="round"
    >
      <rect x="4" y="18" width="40" height="24" rx="2" />
      <path d="M17 36H31" />
      <path d="M16 18 V10 H32 V 2" />
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
