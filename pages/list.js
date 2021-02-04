import ListResumes from "../components/list-resumes"
import Layout from "../components/layout"

export default (props) => {
  const { resumes, handleDelete } = props;
  return (
    <>
      <Layout>
        <ListResumes
          resumes={resumes}
          handleDelete={handleDelete}
        />
      </Layout>
    </>
  );
};
