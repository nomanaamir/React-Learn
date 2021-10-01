import Content from '../content/index';
export default function UserInfo(props) {
    console.log('PROPS from USER-INFO', props)
    const { red, green, blue } = props.colors
    return (
        <div className="userInfo">
            <Content color={red} />
            <Content color={green} />
            <Content color={blue} />

        </div>
    )
}