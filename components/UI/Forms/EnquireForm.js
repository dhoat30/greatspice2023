import { useState, forwardRef } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import LoadingBtn from '../Buttons/LoadingBtn';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'


function ContactForm({ title, subtitle, emailTo, formName, emailRoute }) {
    // create state variables
    const [firstName, setFirstName] = useState("");
    const [firstNameTouched, setFirstNameTouched] = useState(false);

    const [lastName, setLastName] = useState("");
    const [lastNameTouched, setLastNameTouched] = useState(false);

    const [emailAddress, setEmailAddress] = useState("");
    const [emailAddressTouched, setEmailAddressTouched] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("");

    const [eventType, setEventType] = useState("");

    const [numberOfGuests, setNumberOfGuests] = useState("");
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
    );

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
    // set time and date code 
    // eslint-disable-next-line react/display-name
    const DateTimeComponent = forwardRef(({ value, onClick }, ref) => (
        <TextField
            variant="filled"
            fullWidth
            sx={{ marginTop: '16px' }}
            label="Select a date and time"
            color="secondary"
            className="example-custom-input" onClick={onClick} ref={ref} >
            {value}
        </TextField >
    ));
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };
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
                    label="First name"
                    variant="filled"
                    name="firstname"
                    fullWidth
                    color="secondary"
                    autoComplete="given-name"
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
                    label="Last name"
                    variant="filled"
                    name="lastname"
                    fullWidth
                    color="secondary"
                    autoComplete="family-name"
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
                    autoComplete="email"
                    helperText={emailAddressIsInvalid && "Please enter your email address"}
                    error={emailAddressIsInvalid}
                />
                <TextFieldStyle
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    sx={{ marginTop: '16px' }}
                    id="phone-input"
                    label="Phone number"
                    variant="filled"
                    name="phone"
                    fullWidth
                    color="secondary"
                    autoComplete="tel"
                />
                <FormControl variant="filled" fullWidth sx={{ marginTop: '16px' }} color="secondary">
                    <InputLabel id="demo-simple-select-filled-label">Type of event</InputLabel>

                    <Select

                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        label="Type of Event"
                        variant="filled"

                    >
                        <MenuItem value="Birthday Celebrations">Birthday Celebrations</MenuItem>
                        <MenuItem value="Corporate Events">Corporate Events</MenuItem>
                        <MenuItem value="Weddings">Weddings</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </FormControl>
                <TextFieldStyle
                    onChange={(e) => setNumberOfGuests(e.target.value)}
                    value={numberOfGuests}
                    sx={{ marginTop: '16px' }}
                    id="guests-input"
                    label="Number of guests"
                    variant="filled"
                    name="number-of-guests"
                    fullWidth
                    color="secondary"

                />
                {/* date picker  */}
                <div className="date-picker-wrapper ">

                    <DatePicker

                        label="date"
                        className="date-picker "
                        calendarClassName="calendar"
                        showTimeSelect
                        highlightDates={!startDate ? [new Date()] : startDate}
                        excludeTimes={[
                            setHours(setMinutes(new Date(), 30), 13),
                            setHours(setMinutes(new Date(), 0), 14),
                            setHours(setMinutes(new Date(), 30), 14),
                            setHours(setMinutes(new Date(), 0), 15),
                            setHours(setMinutes(new Date(), 30), 15),
                        ]}
                        minTime={setHours(setMinutes(new Date(), 0), 11)}
                        maxTime={setHours(setMinutes(new Date(), 30), 21)}
                        selected={startDate} onChange={(startDate) => setStartDate(startDate)}
                        dateFormat="MMMM d, yyyy h:mmaa"
                        filterTime={filterPassedTime}
                        customInput={<DateTimeComponent />}
                    />
                </div>
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
    .form{ 
        .date-picker-wrapper{ 
            width: 100%; 
           .react-datepicker-wrapper{ 
            width: 100%; 
           }
           .react-datepicker-popper{ 
            z-index: 10; 
           }
        }
    }
   
`

const TextFieldStyle = styled(TextField)`

`