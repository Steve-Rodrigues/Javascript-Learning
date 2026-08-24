//this is going to use props to dynamically display a greeting whether a user is logged on, if not it will prompt to log in
//props: isLoggedOn(t/f) and username
//giving default values for the props in case nothing was entered in the parent component
//(React 19 removed support for defaultProps on function components, so we use default parameters instead)
function WelcomeGreet({username = 'Guest', isLoggedOn = false}){
    const greeting = <h2 className="loginGreet">
                    Welcome to the site, {username}
                    </h2>
    const loginPrompt = <h2 className="login">
                        Please log on to the site
                         </h2>
    //using ternary operator to display the information
    return(
        isLoggedOn ? greeting : loginPrompt
    );
}
export default WelcomeGreet
