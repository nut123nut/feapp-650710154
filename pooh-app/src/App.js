import ProfileCard from './ProfileCard';
import './App.css';

const members = [
  { 
    id: 1, 
    name: 'สมหญิง ใจดี', 
    nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', 
    favorites: ['ชาเขียว', 'แมว', 'ดูซีรีส์'] 
  },
  { 
    id: 2, 
    name: 'สมชาย รักเรียน', 
    nickname: 'ชาย',
    major: 'วิทยาการคอมพิวเตอร์', 
    favorites: ['กาแฟดำ', 'เขียนโค้ด', 'เล่นเกม'] 
  },
  { 
    id: 3, 
    name: 'สุมินตรา พาเพลิน', 
    nickname: 'มิน',
    major: 'วิศวกรรมซอฟต์แวร์', 
    favorites: ['ชานมไข่มุก', 'ฟังเพลง', 'ถ่ายภาพ'] 
  }
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;