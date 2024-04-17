import { TOTAL_PAGES } from '../../constants/constants'
import NewsFilters from '../NewsFilters/NewsFilters'
import NewsList from '../NewsList/NewsList'
import Pagination from '../Pagination/Pagination'
import styles from './styles.module.css'

const NewsByFilters = ({filters, changeFilter, isLoading, news }) => {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1)
    }
  }

  const handlePreviousPage = () => {
    if (filters.page_number > TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number - 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    changeFilter('page_number', pageNumber)
  }

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter}/>

      <Pagination 
        totalPages={TOTAL_PAGES} 
        handlePageClick={handlePageClick} 
        handlePreviousPage={handlePreviousPage} 
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
      />

      <NewsList news={news} isLoading={isLoading} />

      <Pagination 
        totalPages={TOTAL_PAGES} 
        handlePageClick={handlePageClick} 
        handlePreviousPage={handlePreviousPage} 
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
      />
    </section>
  )
}

export default NewsByFilters