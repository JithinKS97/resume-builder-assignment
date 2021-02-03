import ResumeBuilder from "../components/resume-builder"
import Layout from "../components/layout"
import { useRouter } from "next/router"

export default (props) => {
    const { addResume, resumes, updateResume } = props;
    const router = useRouter();
    let { index, edit } = router.query
    let resume = null;
    if(edit) {
        index = Number(index)
        resume = resumes[index];
    }
    return (
        <Layout>
            <ResumeBuilder
                resume={resume}
                addResume={addResume}
                index={edit==="true"?index:null}
                updateResume={updateResume}
            />
        </Layout>
    )
}
