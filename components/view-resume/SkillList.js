export default (props) => {
    const { skills } = props;
    console.log(skills)
    return (
        <>
           {skills.map(skill=><div>{skill.text}</div>)}
        </>
    )
}