import UserFrame from '../user-frame/index';
import UserInfo from '../user-info/index';

import '../../App.css'
export default function Card(props) {
    console.log('props', props)
    const { avatar, name, red, green, blue } = props.sendUser
    const userFrame = {
        avatar,
        name
    }
    const colors = {
        red,
        green,
        blue
    }
    return (
        <div className="card">
            <UserFrame frame={userFrame} />
            <UserInfo colors={colors} />
        </div>
    )
}