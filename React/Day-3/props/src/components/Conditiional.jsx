import React from 'react'

function UserStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}

function Conditiional() {
  return (
    <div>Conditiional</div>
  )
}

export default Conditiional