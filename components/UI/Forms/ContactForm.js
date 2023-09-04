import { useState } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import LoadingBtn from '../Buttons/LoadingBtn';
import axios from 'axios';
function ContactForm({ title, subtitle, emailTo, formName, emailRoute }) {
    // create state variables
    const [firstName, setFirstName] = useState("");
    const [firstNameTouched, setFirstNameTouched] = useState(false);

    const [lastName, setLastName] = useState("");
    const [lastNameTouched, setLastNameTouched] = useState(false);

    const [emailAddress, setEmailAddress] = useState("");
    const [emailAddressTouched, setEmailAddressTouched] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("");

    const [message, setMessage] = useState("")

    // ui states 
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState(false)


    // first name validation
    let firstNameIsValid = firstName.trim().length > 2;
    const firstNameIsInvalid = !firstNameIsValid && firstNameTouched;

    // last name validation
    let lastNameIsValid = lastName.trim().length > 2;
    const lastNameIsInvalid = !lastNameIsValid && lastNameTouched;

    // email address validation
    var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    let emailAddressIsValid = pattern.test(emailAddress);
    const emailAddressIsInvalid = !emailAddressIsValid && emailAddressTouched;

    // submit handler 
    const submitHandler = () => {

        setFirstNameTouched(true)
        setLastNameTouched(true)
        setEmailAddressTouched(true)


        if (!firstName || !lastName || !emailAddress) {
            return
        }
        const formData = {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            message: message,
            emailTo: emailTo,
            formName: formName
        }
        setIsLoading(true)

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
                    setIsLoading(false)
                    setIsSuccess(true)
                    // set initial state to empty string 
                    setFirstName('')
                    setLastName('')
                    setEmailAddress('')
                    setPhoneNumber('')
                    setMessage('')
                    setFirstNameTouched(false)
                    setLastNameTouched(false)
                    setEmailAddressTouched(false)

                }
                else {
                    setIsLoading(false)
                    setIsSuccess(false)
                    setError(true)
                }
            })
            .catch(function (error) {
                console.log(error);
                setIsLoading(false)
                setIsSuccess(false)
                setError(true)

            });
    }


    return (
        <Container>
            <div className='title-wrapper'>
                <h2 className='title font-serif'> {title} </h2>
                <p className='subtitle'> {subtitle} </p>
            </div>
            <form className="form mt-8" >
                <TextFieldStyle
                    sx={{ marginTop: '16px' }}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={() => setFirstNameTouched(true)}
                    value={firstName}
                    required
                    id="firstname-input"
                    label="First Name"
                    variant="filled"
                    name="firstname"
                    fullWidth
                    color="secondary"
                    autocomplete="given-name"
                    helperText={firstNameIsInvalid && "Please enter your first name"}
                    error={firstNameIsInvalid}
                />
                <TextFieldStyle
                    sx={{ marginTop: '16px' }}
                    onChange={(e) => setLastName(e.target.value)}
                    onBlur={() => setLastNameTouched(true)}
                    value={lastName}
                    required
                    id="lastname-input"
                    label="Last Name"
                    variant="filled"
                    name="lastname"
                    fullWidth
                    color="secondary"
                    autocomplete="family-name"
                    helperText={lastNameIsInvalid && "Please enter your last name"}
                    error={lastNameIsInvalid}
                />
                <TextFieldStyle
                    sx={{ marginTop: '16px' }}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    onBlur={() => setEmailAddressTouched(true)}
                    value={emailAddress}
                    required
                    id="email-input"
                    label="Email"
                    variant="filled"
                    name="email"
                    fullWidth
                    color="secondary"
                    autocomplete="email"
                    helperText={emailAddressIsInvalid && "Please enter your email address"}
                    error={emailAddressIsInvalid}
                />
                <TextFieldStyle
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    sx={{ marginTop: '16px' }}
                    id="phone-input"
                    label="Phone Number"
                    variant="filled"
                    name="phone"
                    fullWidth
                    color="secondary"
                    autocomplete="tel"
                />

                <TextFieldStyle
                    sx={{ marginTop: '16px', marginBottom: "16px" }}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    id="message-input"
                    label="Message"
                    variant="filled"
                    name="message"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWidth
                />
                <LoadingBtn align="right" onClick={submitHandler} isLoading={isLoading} isSuccess={isSuccess} />
            </form>

        </Container>
    )
}

export default ContactForm
const Container = styled.div`
    .title{ 
        color: var(--material-theme-sys-light-on-surface-variant, #4C4639);
        font-weight: 400;
        letter-spacing: 2px; 
        font-size: var(--material-theme--display--large);
    }
    .subtitle{ 

    }
   
`

const TextFieldStyle = styled(TextField)`

`