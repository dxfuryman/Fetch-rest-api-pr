import Button from './Button.jsx'

const Form = ({reqType,setReqType}) => {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
        <Button
        buttonText="users"
        reqType={reqType}
        setReqType={setReqType}
        />
            <Button
        buttonText="Posts"
        reqType={reqType}
        setReqType={setReqType}
        />
            <Button
        buttonText="comments"
        reqType={reqType}
        setReqType={setReqType}
        />


        </form>
    )
}
export default Form;