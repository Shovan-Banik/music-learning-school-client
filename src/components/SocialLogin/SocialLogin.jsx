import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { userName: loggedInUser.displayName, userEmail: loggedInUser.email, userImage: loggedInUser.photoURL, role: 'student' }
                fetch('https://music-learning-school-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div className="text-center mt-4 ">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;