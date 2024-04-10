import styles from './styles.module.css'
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { useEffect } from 'react';
import { getNews } from '../../api/apiNews';
import { useState } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination'

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true)
      const response = await getNews(currentPage, pageSize)
      setNews(response.news)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton count={1} type={'banner'} />}

      <Pagination 
        totalPages={totalPages} 
        handlePageClick={handlePageClick} 
        handlePreviousPage={handlePreviousPage} 
        handleNextPage={handleNextPage}
        currentPage={currentPage}
      />

      {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} /> }

      <Pagination 
        totalPages={totalPages} 
        handlePageClick={handlePageClick} 
        handlePreviousPage={handlePreviousPage} 
        handleNextPage={handleNextPage}
        currentPage={currentPage}
      />
    </main>
  )
}

export default Main;