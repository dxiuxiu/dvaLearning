export function asyncAdd(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`async---${text}`)
    }, 500)
  })
}
