import { Card, CardBody } from "reactstrap";

export default (props) => {
    const { personalInfo } = props;
    return (
        <>
           <Card>
            <CardBody>
                <div><b>Name: </b>{personalInfo.name}</div>
                <div><b>Email: </b> {personalInfo.email}</div>
                <div><b>Phone number: </b> {personalInfo.phonenumber}</div>
                <div><b>Address: </b> {personalInfo.address}</div>
            </CardBody>
           </Card>
        </>
    )
}