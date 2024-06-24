
export const UserList = ({ users }) => {
    return <div>
        <h1>UserList</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>

                {
                    users.map(u => <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.surname}</td>
                        <td>{u.salary}</td>
                    </tr>)
                }

            </tbody>
        </table>
    </div>
}