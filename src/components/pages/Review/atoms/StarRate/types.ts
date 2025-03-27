export interface StarRateProps {
  maxValue?: number
  minValue?: number
  value: number
  onChange: (_v: number) => void
}
