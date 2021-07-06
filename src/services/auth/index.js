import SecureLS from "secure-ls"

export const getUser = () => {
  const ls = new SecureLS({ encodingType: "aes" })
  //   const token = ls.get("token")
  //   const userId = ls.get("userId")
  //   const email = ls.get("email")
  //   const name = ls.get("name")
  //   const phone = ls.get("phone")
  //   const messenger = ls.get("messenger")

  const user = {
    token: ls.get("token"),
    userId: ls.get("userId"),
    email: ls.get("email"),
    name: ls.get("name"),
    phone: ls.get("phone"),
    messenger: ls.get("messenger"),
  }

  return user
}

export const isLoggedIn = () => {
  const user = getUser()

  return user.userId.length > 0 ? true : false
}
