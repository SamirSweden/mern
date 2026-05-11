export default function Sparkline({
  data,
  positive,
}: {
  data: number[]
  positive: boolean
}) {
  if (!data.length) return null

  const width = 140
  const height = 50

  const max = Math.max(...data)
  const min = Math.min(...data)

  const points = data
    .map((value, index) => {
      const x =
        (index / (data.length - 1)) * width

      const y =
        height -
        ((value - min) /
          (max - min || 1)) *
          height

      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg width={width} height={height}>
      <polyline
        fill="none"
        stroke={
          positive ? "#22c55e" : "#ef4444"
        }
        strokeWidth="3"
        points={points}
      />
    </svg>
  )
}