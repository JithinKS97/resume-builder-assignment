import ResumeBuilder from "../components/resume-builder"
import Layout from "../components/layout"

export default (props) => {
    const { addResume } = props;
    return (
        <Layout>
            <ResumeBuilder addResume={addResume}/>
        </Layout>
    )
}
