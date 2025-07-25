import React from "react";
import "./UserCard.css";


interface UserCardProps {
    name: string;
    email: string;
    phone: string;
}

function UserCard({ name, email, phone }: UserCardProps) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Телефон: {phone}</p>
    </div>
  );
}

export default UserCard;