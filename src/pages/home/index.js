
export default function HomePage(props) {
    const { history } = props
    const users = [
        {
            name: 'Noman',
            id: '123'
        },
        {
            name: 'Taha',
            id: '456'
        },
        {
            name: 'Marium',
            id: '789'
        }
    ]
    return (
       
          
        <div>
            {
                users.map((item, index) => {
                    return (
                        <button key={index} onClick={() => history.push({
                            pathname: `/user/${item.id}`,
                            state: {
                              data: item,
                            },
                          })}>
                            {item.name}
                        </button>
                    )
                })
            }
        </div>

    )
}