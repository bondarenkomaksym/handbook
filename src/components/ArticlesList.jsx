import React, { useState } from 'react';
// import Pagination from './Pagination';
import User from './User';
import Search from './Search';
// import Sort from './Sort';
import { filteredUsers } from "./users.selectors";
import { connect } from "react-redux";


const ArticlesList = ({ usersList }) => {

  // const [currentPage, setCurrentPage] = useState(0);


  return (
    <div className="main">
      <div className="first">
        <Search />
        {/* <Sort /> */}
        <div className="users">
          <div className="users__invisible">
            {usersList.map((user) => {
              const randomId = Math.round(Math.random() * 100000000);
              return (
                <User key={randomId} {...user} />
              )
            })}
          </div>
        </div>
      </div>
      <div className="second">
        {/* <Pagination
          itemsPerPage={itemsPerPage}
          startIndex={startIndex}
          endIndex={endIndex}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        /> */}
      </div>
    </div>

  );
}


const mapState = state => {
  return {
    usersList: filteredUsers(state),
  }
}


const ConnectedUsers = connect(mapState, null)(ArticlesList);

export default ConnectedUsers;