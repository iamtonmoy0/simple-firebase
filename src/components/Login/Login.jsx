import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
	const [data,setData]=useState()
	const auth=getAuth(app);
	const provider=new GoogleAuthProvider();
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
	console.log(data)
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

	
	return (
		<div>
			{data?
			<button onClick={handleLogout}>logout</button>:
			<button onClick={handleGoogle}>Google login</button>
			}

                          <h3>name{data.displayName} </h3>
			  <p>{data.email}</p>     


		</div>
		
	);
}

export default Login;
