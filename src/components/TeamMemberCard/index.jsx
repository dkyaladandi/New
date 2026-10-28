// Write your code here
import './index.css'
const Teammembercard = props => {
  const {name, role, imageUrl, department} = props

  return (
    <div className="member-card">
      <img src={imageUrl} alt={name} className="member-img" />
      <h1 className="member-name">{name}</h1>
      <p className="member-role">{role} </p>
      <h1 className="member-department">{department}</h1>
    </div>
  )
}

export default Teammembercard
