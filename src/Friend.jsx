export default function Friends({ friend }) {
    console.log(friend)
    const {id, name, username, email,address ,phone} = friend
  return (
    <div className="card2">
      <h4>Roll : {id}</h4>
      <p>Name : {name} </p>
      <p>Username : {username} </p>
      <p>Email : {email}</p>
      <p>Address : {address.city}</p>
      <p>Phone : {phone}</p>
    </div>
  );
}
