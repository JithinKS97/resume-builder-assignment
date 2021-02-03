import Layout from "../components/layout/index";
import { Card, CardBody, Button } from "reactstrap";
import { useRouter } from "next/router"

export default (props) => {
  const { resumes } = props;
  const router = useRouter();

  const handleEditClick = (index) => {
    router.push(`/?index=${index}&&edit=true`)
  }

  return (
    <>
      <style>{style}</style>
      <Layout>
        {resumes.map((resume, index) => (
          <Card className="resume-tile-card">
            <CardBody className="list">
              <div>{resume.title}</div>
              <div>
                <Button onClick={()=>handleEditClick(index)}>Edit</Button>
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
    .resume-tile-card {
        margin:20px 0;
    }
`;
