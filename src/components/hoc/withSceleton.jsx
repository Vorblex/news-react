import Skeleton from '@/components/Skeleton/Skeleton'

function withSceleton(Component, type, count) {
  return function WithSceleton({ loading, ...props }) {
    return !loading ? <Component {...props} /> : <Skeleton type={type} count={count} />
  }
}

export default withSceleton
