import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
	const [data,setData]=useState()
	const auth=getAuth(app);
	const provider=new GoogleAuthProvider();
	const gitProvider=new GithubAuthProvider();
	const handleGoogle=()=>{
		signInWithPopup(auth,provider)
		.then(result=>{
			const user= result.user;
			setData(user)
		
			
			
		})
		.catch(error=>{
			console.log('error',error.message)
		})
	}
	
	const handleLogout=()=>{
		signOut(auth)
		.then(result=>{
			console.log(result)
			setData(null)
		})
		.catch(error=>{
			console.log(error)
		})
	}
	const handleGitAuth=()=>{
		signInWithPopup(auth,gitProvider)
		.then(result=>{
			const user=result.user;
			setData(user)
		})
		.catch(error=>{
			console.log(error)
		})
	}
	console.log(data)

	
	return (
		<div>
			{data?
			<button onClick={handleLogout}>logout</button>:
			<>
			<button onClick={handleGoogle}>Google login</button>
			<button onClick={handleGitAuth} >Github signin</button>
			</>
			}

                         {data && <div>
                <h3>User: {data.displayName}</h3>
                <p>Email: {data.email}</p>
                <img src={data.photoURL} alt="" />
            </div> }


		</div>
		
	);
}

export default Login;
