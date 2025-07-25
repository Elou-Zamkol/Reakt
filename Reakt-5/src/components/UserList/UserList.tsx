import React, { useState } from "react";
import useUsers from "../../hooks/useUsers";
import "./UserList.css";
import UserCard from "../UserCard/UserCard";

function UserList() {

  const { data, error, isLoading, mutate } = useUsers();

  const [search, setSearch] = useState("");

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  if (!data) return null;


  const filteredUsers = data.filter((user: any) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2>Пользователи</h2>
      <input
        type="text"
        placeholder="Поиск по имени..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
      <button className="refresh-btn" onClick={() => mutate()} > Обновить</button>

      <div className="user-list-container">

        {filteredUsers.map((user: any) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        ))}

        {filteredUsers.length === 0 && <div>Ничего не найдено</div>}
      </div>
    </>
  );
}

export default UserList;