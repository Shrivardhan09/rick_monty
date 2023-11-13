import './pagination.css'
import ReactPaginate from 'react-paginate';
const Pagination = ({ setPages, info, pages }) => {

  // info is coming from app js. info is present in the api {info: {}, results: {}}
  console.log({ info })

  return (
    <div className="pagination-container">
      {/* react paginate for pagination */}
      <ReactPaginate
        className="pagination gap-3 md-gap-2 sm-gap-1 align-items-center my-4 anchor-link "
        pageCount={Math.ceil(info?.info?.pages)}
        forcePage={pages === 1 ? 0 : pages - 1}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName=' anchor-link '
        previousClassName=' anchor-link'
        pageClassName='page-item '
        pageLinkClassName='page-link'
        onPageChange={(change) => setPages(change?.selected + 1)}
        activeClassName='active'
      />
    </div>
  )
}

export default Pagination
