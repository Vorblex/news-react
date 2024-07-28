import Skeleton from '@/components/Skeleton/Skeleton'

function withSceleton(Component, type, count, direction) {
  return function WithSceleton({ loading, ...props }) {
    return !loading ? (
      <Component {...props} />
    ) : (
      <Skeleton type={type} count={count} direction={direction} />
    )
  }
}

export default withSceleton
