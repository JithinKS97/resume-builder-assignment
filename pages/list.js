import Layout from "../components/layout/index";
import { Card, CardBody, Button } from "reactstrap";
import { useRouter } from "next/router"

export default (props) => {
  const { resumes, handleDelete } = props;
  const router = useRouter();

  const handleEditClick = (index) => {
    router.push(`/?index=${index}&&edit=true`)
  }

  const handleViewClick = (index) => {
    router.push(`/view?index=${index}`)
  }

  return (
    <>
      <style>{style}</style>
      <Layout>
        {resumes.length===0?<h2>No resumes added</h2>:null}
        {resumes.map((resume, index) => (
          <Card className="resume-tile-card">
            <CardBody className="list">
              <div>{resume.title}</div>
              <div>
                <Button onClick={()=>handleViewClick(index)}>View</Button>
                <Button className="button" onClick={()=>handleEditClick(index)}>Edit</Button>
                <Button onClick={()=>handleDelete(index)} color="danger" className="button">
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
    .button {
        margin-left:10px;
    }
    .resume-tile-card {
        margin:20px 0;
    }
`;
