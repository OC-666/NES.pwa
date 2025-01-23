export
type I_color = [number, number, number]

export
const random_color = () => [
  Math.floor(Math.random() * 360),
  Math.floor(Math.random() * 20 + 40),
  50,
]

export
const big_tail = (color?: I_color): [I_color, I_color] => {
  const [h, s, l] = color ?? random_color()
  return [
    [h, s, l],
    [(h + 180) % 360, s, l]
  ]
}

export
const str_color = (color: I_color, alpha?: number) =>
  alpha === undefined ? `hsl(${color[0]},${color[1]},${color[2]})`
  : `hsla(${color[0]},${color[1]},${color[2]},${alpha})`
