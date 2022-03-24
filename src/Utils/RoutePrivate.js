import { Navigate } from 'react-router-dom'

const RoutePrivate = props => {
    const user = localStorage.getItem('user-session')
    
    if (!user) {
        return <Navigate to="/" />
    } else {
        return props.children
    }
}

export default RoutePrivate