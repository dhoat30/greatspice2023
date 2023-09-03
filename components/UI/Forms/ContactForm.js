import React, { useState } from 'react'
import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Paper, TextField } from '@mui/material';
import axios from 'axios';
import Alert from '@mui/material/Alert';

function ContactForm({ title, content, formName, emailTo, leadType, emailRoute, formType, className }) {
    // create state variables 
    const [firstName, setFirstName] = useState("")
    const [firstNameTouched, setFirstNameTouched] = useState(false)

    const [lastName, setLastName] = useState("")
    const [lastNameTouched, setLastNameTouched] = useState(false)

    const [emailAddress, setEmailAddress] = useState("")
    const [emailAddressTouched, setEmailAddressTouched] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState("")

    const [orchardSize, setOrchardSize] = useState("")

    const [companyName, setCompanyName] = useState("")

    const [message, setMessage] = useState("")
    const [messageTouched, setMessageTouched] = useState(false)

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    // validation 
    // first name validation 
    let firstNameIsValid = firstName.trim().length > 2
    const firstNameIsInvalid = !firstNameIsValid && firstNameTouched
    // last name validation
    let lastNameIsValid = lastName.trim().length > 2
    const lastNameIsInvalid = !lastNameIsValid && lastNameTouched
    // email address validation 
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let emailAddressIsValid = pattern.test(emailAddress)
    const emailAddressIsInvalid = !emailAddressIsValid && emailAddressTouched
    // first name validation 
    let messageIsValid = message.trim().length > 2
    const messageIsInvalid = !messageIsValid && messageTouched
    // change handler 
    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value)
    }
    const emailAddressChangeHandler = (e) => {
        setEmailAddress(e.target.value)
    }
    const phoneNumberChangeHandler = (e) => {
        setPhoneNumber(e.target.value)
    }
    const orchardSizeChangeHandler = (e) => {
        setOrchardSize(e.target.value)
    }
    const companyNameChangeHandler = (e) => {
        setCompanyName(e.target.value)
    }
    const messageChangeHandler = (e) => {
        setMessage(e.target.value)
    }
    // blur handler 
    const firstNameBlurHandler = (e) => {
        setFirstNameTouched(true)
    }
    const lastNameBlurHandler = (e) => {
        setLastNameTouched(true)
    }
    const emailAddressBlurHandler = (e) => {
        setEmailAddressTouched(true)
    }
    const messageBlurHandler = (e) => {
        setMessageTouched(true)
    }
    // submit handler 
    const submitHandler = () => {
        setFirstNameTouched(true)
        setLastNameTouched(true)
        setEmailAddressTouched(true)
        setMessageTouched(true)

        if (!firstName || !lastName || !emailAddress || !message) {
            return
        }
        const formData = {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            orchardSize: orchardSize,
            companyName: companyName,
            message: message,
            emailTo: emailTo,
            leadType: leadType,
            formName: formName,
            formType: formType
        }
        var config = {
            method: 'post',
            url: '/api/createContact',
            headers: {
                'Content-Type': 'application/json'
            },
            data: formData
        };
        setLoading(true)

        axios(config)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });

        // send email 
        var config = {
            method: 'post',
            url: `${emailRoute}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: formData
        };
        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    setLoading(false)
                    setSuccess(true)
                    // set initial state to empty string 
                    setFirstName('')
                    setLastName('')
                    setEmailAddress('')
                    setPhoneNumber('')
                    setOrchardSize('')
                    setCompanyName('')
                    setMessage('')
                    setFirstNameTouched(false)
                    setLastNameTouched(false)
                    setEmailAddressTouched(false)
                    setMessageTouched(false)
                    console.log(response)
                }
                else {
                    setLoading(false)
                    setSuccess(false)
                    setError(true)
                }
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
                setSuccess(false)
                setError(true)

            });
    }


    // use media query for responsiveness 
    const matches = useMediaQuery('(min-width:900px)');
    const paperStyle = {
        backgroundColor: "var(--sanger--theme--white)",
        padding: matches ? "56px 32px" : "56px 8px",
        maxWidth: "900px",
        width: "calc(100% - 16px) ",
        margin: "0 auto"
    }

    return (
        <Container className={className}>

            <h3 className="font-serif title">{title} </h3>
            <div className="heading-small" dangerouslySetInnerHTML={{ __html: content }} />
            <form >
                <InputDiv>

                    <TextField id="filled-basic"
                        label="First Name"
                        variant="filled"
                        sx={{
                            backgroundColor: "var(--material-theme-sys-light-surface-container-low, #F9F3EA)"
                        }}
                        helperText={firstNameIsInvalid && "Please enter your first name"}
                        error={firstNameIsInvalid}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        value={firstName}
                        required
                        autoComplete="given-name"

                    />

                    <TextField id="filled-basic"
                        label="Last Name"
                        variant="filled"
                        sx={{
                            backgroundColor: "var(--material-theme-sys-light-surface-container-low, #F9F3EA)"
                        }}
                        helperText={lastNameIsInvalid && "Please enter your last name"}
                        error={lastNameIsInvalid}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        value={lastName}
                        required
                        autoComplete="family-name"
                    />
                </InputDiv>

                <InputDiv>
                    <TextField id="filled-basic"
                        label="Email address"
                        variant="filled"
                        sx={{
                            backgroundColor: "var(--material-theme-sys-light-surface-container-low, #F9F3EA)"
                        }}
                        helperText={emailAddressIsInvalid && "Please enter your email address"}
                        error={emailAddressIsInvalid}
                        onChange={emailAddressChangeHandler}
                        onBlur={emailAddressBlurHandler}
                        value={emailAddress}
                        required
                        autoComplete="email"
                    />
                    <TextField id="filled-basic"
                        label="Phone number"
                        variant="filled"
                        sx={{
                            backgroundColor: "var(--material-theme-sys-light-surface-container-low, #F9F3EA)"
                        }}
                        onChange={phoneNumberChangeHandler}
                        value={phoneNumber}
                        autoComplete="phone"

                    />

                </InputDiv>

                <InputDiv>
                    <TextField id="filled-basic"
                        label="Orchard size"
                        variant="filled"
                        sx={{
                            backgroundColor: "var(--material-theme-sys-light-surface-container-low, #F9F3EA)"
                        }}
                        onChange={orchardSizeChangeHandler}
                        value={orchardSize}

                    />
                    <TextField id="filled-basic"
                        label="Company name"
                        variant="filled"
                        sx={{
                            backgroundColor: "var(--material-theme-sys-light-surface-container-low, #F9F3EA)"
                        }}
                        onChange={companyNameChangeHandler}
                        value={companyName}

                    />

                </InputDiv>
                <div className="text-area">
                    <TextField id="filled-basic"
                        label="Message"
                        variant="filled"
                        sx={{
                            backgroundColor: "var(--material-theme-sys-light-surface-container-low, #F9F3EA)"
                        }}
                        helperText={messageIsInvalid && "Please enter your last name"}
                        error={messageIsInvalid}
                        onChange={messageChangeHandler}
                        onBlur={messageBlurHandler}
                        value={message}
                        required

                        fullWidth
                        multiline
                        rows={4}
                    />

                </div>
                <button onClick={submitHandler}> Submit</button>
                {/* <PrimaryButton success={success} loading={loading} callToActionText="Enquire Now" variant="contained" onClick={submitHandler} /> */}
                {error && <Alert severity="error">Something went wrong, Please try again. </Alert>}

            </form>

        </Container >


    )
}

export default ContactForm
const Container = styled.section`
.title{ 
    color: var(--material-theme-sys-light-on-surface-variant, #4C4639);
font-size: var(--material-theme--display--large); 
}


.heading-small{ 
    color: var(--sanger--theme--sys--light--on-surface-variant);  
    margin-top: 8px; 
}
button{ 
    display: block ;
    margin: 16px 0 16px auto; 
}
.text-area{ 
    margin-top: 24px; 
}
form{ 
    
}
`
const InputDiv = styled.div`
display: flex; 
gap: 24px; 
@media(max-width: 600px){ 
    flex-wrap: wrap ;
    gap: 0; 
    }
>div{ 
    width: 50%; 
    margin-top: 24px; 
    @media(max-width: 600px){ 
        width: 100%; 
    }
}

`