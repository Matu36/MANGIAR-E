import React from "react";
import "./Paginations.module.css";

export default function Paginations(props) {
  const { numberOfPage, currentPage, handlePageNumber } = props

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  
  const handleClick = (newPage) => {
    handlePageNumber(newPage)
  }

  return (
    <div className="pagesButtons">
      {
        currentPage > 1 &&

        (<button className="buttonsPagination" onClick={() => handleClick(1)} >
          {"First Page"}
        </button>)
      }

      {
        currentPage > 1 &&

        (<button className="buttonsPagination" onClick={() => handleClick(previousPage)} >
          {"Prev Page"}
        </button>)
      }

      {
        currentPage > 2 &&
        
        (<button className="buttonsPagination" onClick={() => handleClick(previousPage)}>
          {previousPage - 1}
        </button>)
      }

      {
        currentPage > 1 &&
        
        (<button className="buttonsPagination" onClick={() => handleClick(previousPage)}>
          {previousPage}
        </button>)
      }

      <button className="buttonsPagination">
        <div className="actualPage">{currentPage}</div>
      </button>

      { numberOfPage >= nextPage  &&

        <button className="buttonsPagination" onClick={() => handleClick(nextPage)}>
          {nextPage}
        </button>
      }

      {
        numberOfPage > currentPage &&

        (<button className="buttonsPagination" onClick={() => handleClick(nextPage)} >
          {"Next Page"}
        </button>)
      }

      {
        numberOfPage > currentPage &&

        (<button className="buttonsPagination" onClick={() => handleClick(numberOfPage)} >
          {"Last Page"}
        </button>)
      }
    </div>
  );
}