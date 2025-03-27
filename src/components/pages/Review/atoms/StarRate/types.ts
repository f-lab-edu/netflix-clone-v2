export interface StarRateBaseProps {
  maxValue?: number
  minValue?: number
}

export interface StarRateProps extends StarRateBaseProps {
  value: number
  onChange: (_v: number) => void
}

export interface HookFormStarRateProps extends StarRateBaseProps {
  name: string
} 
