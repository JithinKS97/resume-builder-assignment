export default (props) => {
    const { personalInfo } = props;
    return (
        <>
           <b><div>Name</div></b>
           <div>{personalInfo.name}</div>
           <b><div>Email</div></b>
           <div>{personalInfo.email}</div>
           <b><div>Address</div></b>
           <div>{personalInfo.address}</div>
           <b><div>Phone number</div></b>
           <div>{personalInfo.phonenumber}</div>
        </>
    )
}