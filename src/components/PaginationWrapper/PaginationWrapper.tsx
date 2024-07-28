import Pagination from '@/components/Pagination/Pagination'

const PaginationWrapper = ({ top, bottom, children, ...props }) => {
  return (
    <>
      {top && <Pagination {...props} />}
      {children}
      {bottom && <Pagination {...props} />}
    </>
  )
}

export default PaginationWrapper
