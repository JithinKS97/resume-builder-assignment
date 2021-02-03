export default (props) => {
    const { personalInfo } = props;
    return (
        <>
           <div><b>Name: </b>{personalInfo.name}</div>
           <div><b>Email: </b> {personalInfo.email}</div>
           <div><b>Phone number: </b> {personalInfo.phonenumber}</div>
           <div><b>Address: </b> {personalInfo.address}</div>
        </>
    )
}