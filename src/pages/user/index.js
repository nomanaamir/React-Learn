import {
    useParams,
    useRouteMatch
} from "react-router-dom";
export default function UserPage(props) {
    let match = useRouteMatch("/user/456");
    console.log('match!!!!=>>', match)
    const { id, state } = useParams();
    const { name } = props.history.location.state?.data
    console.log(props.history.location.state?.data
    )
    return (
        <h1>HELLO, {name} {match !== null ? 'Premium' : null}</h1>
    )
}
