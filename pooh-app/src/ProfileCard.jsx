function ProfileCard({ name, nickname, major = 'ยังไม่ระบุสาขา', favorites }) {
  return (
    <div className="profile-card">
      <h3>{name} ({nickname})</h3>
      <p><strong>สาขา:</strong> {major}</p>
      <p className="fav-title"><strong>ของที่ชอบ:</strong></p>
      <ul>
        {favorites.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;