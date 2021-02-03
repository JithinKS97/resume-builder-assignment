import Layout from "../components/layout"
import { useRouter } from "next/router"
import ViewResume from "../components/view-resume"

export default (props) => {
    const { resumes } = props;
    const router = useRouter();
    let { index } = router.query
    const resume = resumes[Number(index)]
    return (
        <Layout>
            <ViewResume resume={resume}/>
        </Layout>
    )
}
