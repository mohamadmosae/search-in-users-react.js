import React from "react";

function User({ user }) {
  return (
    <>
      <table className="table mt-5 table-striped">
        <thead>
          <tr>
            <td>نام</td>
            <td>نام خانوادگی</td>
            <td>ایمیل</td>
          </tr>
        </thead>
        {user?.map((user) => {
          return (
            <tr>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default User;
