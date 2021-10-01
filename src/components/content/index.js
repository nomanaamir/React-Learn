export default function Content(props) {
    console.log('PROPS from CONTENT', props)
    const { color } = props
    return (
        <div className="content" style={{background: color}}>

        </div>
    )
}