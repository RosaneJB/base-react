import { UserCreateType } from "../../ts/users"

export const CreateUser = ({classNames}:UserCreateType) => {
    return (
        <>
        <h1 className={classNames}>Criar usuário</h1>
        </>
    )
}
