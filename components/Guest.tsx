import { SignInButton } from "@clerk/nextjs"


const Guest = () => {
  return (
    <div className="guest">
       <h1>Welcome</h1>
         <p>Please sign in to track your expenses and manage your budget with ease using our Expense Tracker app.</p>
         <SignInButton/>
        </div>
  )
}

export default Guest