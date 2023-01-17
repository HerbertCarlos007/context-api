import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Context } from '../contexts/Context'

export const ShowData = () => {
    const { state, dispatch } = useContext(Context)

    return (
        <div>
            Tela ShowData do {state.user.name} que tem {state.user.age}
            <br />
            <Link to='/'>Voltar para SignUp</Link>
        </div>
    )
}