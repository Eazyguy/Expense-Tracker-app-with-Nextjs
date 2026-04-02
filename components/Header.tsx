
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

const Header = () => {
    const user = checkUser();

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <h2>Expense Tracker</h2>
            <div>
                <Show when={"signed-out"}>
                    <SignInButton/>
                </Show>
                <Show when={"signed-in"}>
                    <UserButton/>
                </Show>
            </div>
        </div>
    </nav>
  )
}

export default Header