const rand256 = () => Math.floor(Math.random()*256);

export const randomColor = () => {
  return `rgb(${rand256()}, ${rand256()}, ${rand256()})`
}