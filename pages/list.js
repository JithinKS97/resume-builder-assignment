import Layout from "../components/layout/index";
import { Card, CardBody, Button } from "reactstrap";

export default (props) => {
  const { resumes } = props;

  const handleEditClick = () => {
    
  }

  return (
    <>
      <style>{style}</style>
      <Layout>
        {resumes.map((resume, index) => (
          <Card>
            <CardBody className="list">
              <div>{resume.title}</div>
              <div>
                <Button>Edit</Button>
                <Button color="danger" className="delete-button">
                  X
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </Layout>
    </>
  );
};

const style = `
    .list {
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
    .delete-button {
        margin-left:10px;
    }
`;
