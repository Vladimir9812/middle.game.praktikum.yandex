export type AnimateInputParameters = {
  update: (deltaTime: number) => void
  render: (deltaTime: number) => void
}

export default function animate({ update, render }: AnimateInputParameters) {
  let last = performance.now()
  const step = 1 / 60
  let dt = 0
  let now: number

  const frame = () => {
    now = performance.now()
    dt = dt + Math.min(1, (now - last) / 1000)
    while (dt > step) {
      dt = dt - step
      update(step)
    }
    last = now

    render(dt)
    requestAnimationFrame(frame)
  }

  frame()
}
