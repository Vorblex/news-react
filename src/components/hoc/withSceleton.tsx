import Skeleton from '@/components/Skeleton/Skeleton'
import { DirectionType, SkeletonType } from '@/interfaces'

type Props = {
  loading: boolean
}

function withSceleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType,
) {
  return function WithSceleton({ loading, ...props }: Props & P) {
    return !loading ? (
      <Component {...(props as P)} />
    ) : (
      <Skeleton type={type} count={count} direction={direction} />
    )
  }
}

export default withSceleton
