import { useNavigate} from 'react-router-dom'
function Login(){
    const navigate = useNavigate()

    function eventChange(){
        navigate("/dashboard")
    }
    return <>
        <h1>Login page</h1>
        <buttton onClick={eventChange}>login</buttton>
    </>
}
export default Login