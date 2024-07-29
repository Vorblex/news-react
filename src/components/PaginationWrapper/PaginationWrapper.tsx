import Pagination from '@/components/Pagination/Pagination'
import { IPaginationProps } from '@/interfaces'
import { ReactNode } from 'react'

interface IProps {
  top?: boolean
  bottom?: boolean
  children: ReactNode
}

type Props = IProps & IPaginationProps

const PaginationWrapper = ({ top, bottom, children, ...props }: Props) => {
  return (
    <>
      {top && <Pagination {...props} />}
      {children}
      {bottom && <Pagination {...props} />}
    </>
  )
}

export default PaginationWrapper
