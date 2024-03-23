import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/dd.png" />

        <Title title="Jiranuwat Daorueang(Erk)">
          <h3>ตำแหน่ง : Frontend</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment("2024/03/19").format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/10/04").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : 0983019342
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : chiranuwat16@gmail.com</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>นายจิรนุวัฒน์ ดาวเรือง ชื่อเล่นเอิ๊ก อายุ 21 ปี </p>
        </Title>

        <Title title="Work Experience">
          <p>เคยทำงานที่ Harvard University Devloper Frontend</p>
          <p>สมาชิกสภาผู้แทนราษฏร เลขาธิการสหประชาชาติ UN</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>React.js</p>
          <p>Next.js</p>
          <p>Vue.js</p>
          <p>Git</p>
        </Title>

        <Title title="My Talent">
          <p>อ่านหนังสือ</p>
          <p>เล่นกีต้าร์โปร่งและคลาสสิค</p>
        </Title>
      </div>
    </main>
  )
}

export default App
