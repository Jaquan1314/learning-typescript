import React from 'react'

const Index = () => {

  interface User {
    name: string;
    id: number;
  }

  // const user: User = {
  //   name: 'Hayes',
  //   id: 0,
  // }

  class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }

  const user: User = new UserAccount('Murphy', 1)

  const getLength = (obj: string | string[]) => {
    return obj.length
  }

  console.log(getLength("javaughn"))

  return (
    <>
      <h1>Some Text</h1>
      { getLength('javaughn') }
    </>
  )
}

export default Index
