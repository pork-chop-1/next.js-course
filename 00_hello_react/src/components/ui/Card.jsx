import './Card.scoped.scss'

function Card({children, width, height}) {
  if(width == null) {
    width = "30rem"
  }
  if(height == null) {
    height = "10rem"
  }
  return <div className='card' style={{width, height}}>
    {children}
  </div>
}

export default Card