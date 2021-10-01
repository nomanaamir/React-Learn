function UserFrame(props) {
    const { avatar, name } = props.frame
    console.log('props from USER FRAME', props)
    return (
        <div className="frame-container">
            <div className="avatar">
                <img src={avatar} alt="avatar" />
                <p>{name}</p>
            </div>
        </div>

    )
}

export default UserFrame;