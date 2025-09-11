"use client";
import {useGetUsersQuery, useShowUsersQuery} from "../lib/usersApi.js";
import {useState, useEffect} from 'react'

export default function UserList(){
    const { data: users, error, isLoading } = useGetUsersQuery();
    const [usersData, setUsersData] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

       // Fetch user details when a user is selected
    const { data: userDetails, isLoading: isUserLoading, error: userError } = useShowUsersQuery(
        selectedUserId ? { id: selectedUserId } : 0, // skip if no user selected
    );

    console.log('userDetails',userDetails)

    useEffect(()=>{
        if (users) {
            setUsersData(users);
        }
    },[users])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading users</div>;

    const handleUserClick = (id) => {
        // Handle user click, e.g., navigate to user detail page
        setSelectedUserId(id);
        console.log(`User with ID ${id} clicked`);
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {usersData && usersData.map(user => (
                    <li key={user.id}>
                        <a href="#" onClick={() => handleUserClick(user.id)}>{user.name}</a>
                    </li>
                ))}
            </ul>

            
            {isUserLoading && <div>Loading user details...</div>}
            {userDetails && (
                <div>
                    <h2>User Details</h2>
                    <div>
                        <h3>{userDetails.name}</h3>
                    
                    </div>
                </div>
            )}
        </div>
    );
}