import UserProfile from './Components/UserProfile/index'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'software Developer',
  },
]

const App = () => (
  <div className="user-list-container">
    <h1 className="heading">Users List</h1>
    <ul>
      {userDetailsList.map(eachUser => (
        <UserProfile userDetails={eachUser} key = {eachUser.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
