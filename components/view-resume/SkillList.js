import { Card, CardBody } from "reactstrap";

export default (props) => {
  const { skills } = props;
  return (
    <>
      <Card className="skills-list-card">
        <CardBody>
          <ul>
            {skills.map((skill) => (
                <li>{skill.text}</li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </>
  );
};
