import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthNavigate = (Component) => {
    const NavigateComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...props}/>
    }
    let ConnectAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent)
    return ConnectAuthNavigateComponent
}