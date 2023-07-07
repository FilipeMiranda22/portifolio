import { skills } from "../data"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <>
        {skills.map(({ title, percentage, icon }, index) => {
            return (
                <div className="progress_box" key={index}>
                    <div className="progress_circle">
                        <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage}/>
                    </div>
                    <div className="title_group">
                        <h3 className="skills_title">{title}</h3>
                        <div className="skills_icon">{icon}</div>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default Skills