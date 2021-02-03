export default (props) => {
    const { skills } = props;
    return (
        <>
           {skills.map(skill=><div>{skill.text}</div>)}
        </>
    )
}