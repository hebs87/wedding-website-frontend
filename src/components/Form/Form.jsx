import {styles} from './Form.styles';
import React, {Component, Fragment} from "react";
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import {faMusic} from "@fortawesome/free-solid-svg-icons/faMusic";
import {faGlassMartiniAlt} from "@fortawesome/free-solid-svg-icons/faGlassMartiniAlt";
import {faCheese} from "@fortawesome/free-solid-svg-icons/faCheese";
import {faComment} from "@fortawesome/free-solid-svg-icons/faComment";
import MenuItem from "@material-ui/core/MenuItem";
import {GUESTS, ATTENDING_CHOICES} from "./FormChoices";
import Spinner from "../Spinner/Spinner";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: GUESTS,
      attendingChoices: ATTENDING_CHOICES,
      formSelections: {
        'guestGroup': '',
        'attending': '',
        'notAttending': '',
        'song': '',
        'drink': '',
        'dietaryRequirements': '',
        'additionalInfo': ''
      },
      guestGroupHasError: false,
      attendingHasError: false,
      songHasError: false,
      drinkHasError: false,
      submitted: false,
    };
  }

  handleChange = event => {
    let formSelections = this.state.formSelections;
    formSelections[event.target.name] = event.target.value
    this.setState({
      formSelections,
      guestGroupHasError: false,
      attendingHasError: false,
      songHasError: false,
      drinkHasError: false,
    });
  };

  postForm = () => {
    let formSelections = this.state.formSelections;
    fetch(`${process.env.REACT_APP_URL}/reply/rsvp/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        guest_name: formSelections.guestGroup,
        attending: formSelections.attending,
        not_attending: formSelections.notAttending ? formSelections.notAttending : "N/A",
        favourite_song: formSelections.song,
        favourite_drink: formSelections.drink ? formSelections.drink : 'N/A',
        dietary_requirements: formSelections.dietaryRequirements ? formSelections.dietaryRequirements : "N/A",
        additional_info: formSelections.additionalInfo ? formSelections.additionalInfo : "N/A"
      })
    })
      .then(res => res.json())
      .then(() => this.setPropStates(formSelections))
      .then(() => {
        setTimeout(function () {
          window.location.href = '/'
        }, 4000);
      })
      .catch(err => this.setErrorPropStates());
  }

  setPropStates = (formSelections) => {
    this.props.setAttending(formSelections.attending === 'Yes');
    this.props.setShowFlashMessage(true);
    this.setState({submitted: true});
  }

  setErrorPropStates = () => {
    this.props.setSubmissionError(true);
    this.props.setShowFlashMessage(true);
  }

  submitForm = event => {
    let guestGroupHasError = false, attendingHasError = false, songHasError = false, drinkHasError = false;
    if (!this.state.formSelections.guestGroup) {
      guestGroupHasError = true;
    }
    if (!this.state.formSelections.attending) {
      attendingHasError = true;
    }
    if (!this.state.formSelections.song) {
      songHasError = true;
    }
    if (!this.state.formSelections.drink && this.state.formSelections.attending === 'Yes') {
      drinkHasError = true;
    }
    this.setState({guestGroupHasError, attendingHasError, songHasError, drinkHasError},
      () => {
        if (!this.state.guestGroupHasError && !this.state.attendingHasError
          && !this.state.songHasError && !this.state.drinkHasError) {
          this.postForm();
        }
      })
  }

  resetForm = event => {
    this.setState({
      formSelections: {
        'guestGroup': '',
        'attending': '',
        'notAttending': '',
        'song': '',
        'drink': '',
        'dietaryRequirements': '',
        'additionalInfo': ''
      },
      guestGroupHasError: false,
      attendingHasError: false,
      songHasError: false,
      drinkHasError: false,
    });
  }

  render() {
    // Destructure props and state
    const {classes} = this.props;
    const {
      guests, attendingChoices, formSelections, guestGroupHasError, attendingHasError,
      songHasError, drinkHasError, submitted
    } = this.state;

    return (
      <div>
        <Grid container spacing={3}>
          {
            submitted &&
            <Spinner/>
          }
          {
            !submitted &&
            <Fragment>
              <Grid item xs={12} md={6} className={classes.formControl}>
                <FontAwesomeIcon icon={faUsers} className={classes.formIcon}/>
                <TextField
                  className={classes.formField}
                  id="guestGroup"
                  name="guestGroup"
                  select
                  label="Guest/Group"
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                      input: classes.input,
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      shrink: classes.labelFilled,
                      focused: classes.labelFocused,
                    }
                  }}
                  SelectProps={{
                    classes: {
                      root: classes.selectRoot,
                    }
                  }}
                  value={formSelections.guestGroup}
                  onChange={(e) => this.handleChange(e)}
                >
                  {guests.map(guest => (
                    <MenuItem
                      classes={{
                        root: classes.menuRoot,
                      }}
                      key={guest.value}
                      value={guest.value}
                    >
                      {guest.label}
                    </MenuItem>
                  ))}
                </TextField>
                {
                  guestGroupHasError &&
                  <FormHelperText className={`${classes.errorMessage} ${classes.optionError}`}>
                    Please choose an option!
                  </FormHelperText>
                }
              </Grid>
              <Grid item xs={12} md={6} className={classes.formControl}>
                <FontAwesomeIcon icon={faCheckCircle} className={classes.formIcon}/>
                <TextField
                  className={classes.formField}
                  id="attending"
                  name="attending"
                  select
                  label="Can you make it?"
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                      input: classes.input,
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      shrink: classes.labelFilled,
                      focused: classes.labelFocused,
                    }
                  }}
                  SelectProps={{
                    classes: {
                      root: classes.selectRoot,
                    }
                  }}
                  value={formSelections.attending}
                  onChange={(e) => this.handleChange(e)}
                >
                  {attendingChoices.map(choice => (
                    <MenuItem
                      classes={{
                        root: classes.menuRoot,
                      }}
                      key={choice.value}
                      value={choice.value}
                    >
                      {choice.label}
                    </MenuItem>
                  ))}
                </TextField>
                {
                  attendingHasError &&
                  <FormHelperText className={classes.errorMessage}>Please choose an option!</FormHelperText>
                }
              </Grid>
              <Grid item xs={12} md={6} className={classes.formControl}>
                <FontAwesomeIcon icon={faTimesCircle} className={classes.formIcon}/>
                <TextField
                  className={classes.formField}
                  id="notAttending"
                  name="notAttending"
                  label="Anyone in your group can't make it?"
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                      input: classes.input,
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      shrink: classes.labelFilled,
                      focused: classes.labelFocused,
                    }
                  }}
                  value={formSelections.notAttending}
                  onChange={(e) => this.handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={6} className={classes.formControl}>
                <FontAwesomeIcon icon={faMusic} className={classes.formIcon}/>
                <TextField
                  className={classes.formField}
                  id="song"
                  name="song"
                  label="Pick a song for our playlist"
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                      input: classes.input,
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      shrink: classes.labelFilled,
                      focused: classes.labelFocused,
                    }
                  }}
                  value={formSelections.song}
                  onChange={(e) => this.handleChange(e)}
                />
                {
                  songHasError &&
                  <FormHelperText className={classes.errorMessage}>Please pick a song!</FormHelperText>
                }
              </Grid>
              <Grid item xs={12} md={6} className={classes.formControl}>
                <FontAwesomeIcon icon={faGlassMartiniAlt} className={classes.formIcon}/>
                <TextField
                  className={classes.formField}
                  id="drink"
                  name="drink"
                  label="What's your drink?"
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                      input: classes.input,
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      shrink: classes.labelFilled,
                      focused: classes.labelFocused,
                    }
                  }}
                  value={formSelections.drink}
                  onChange={(e) => this.handleChange(e)}
                />
                {
                  drinkHasError &&
                  <FormHelperText className={classes.errorMessage}>Please pick a drink!</FormHelperText>
                }
              </Grid>
              <Grid item xs={12} md={6} className={classes.formControl}>
                <FontAwesomeIcon icon={faCheese} className={classes.formIcon}/>
                <TextField
                  className={classes.formField}
                  id="dietaryRequirements"
                  name="dietaryRequirements"
                  label="Any dietary requirements"
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                      input: classes.input,
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                      shrink: classes.labelFilled,
                      focused: classes.labelFocused,
                    }
                  }}
                  value={formSelections.dietaryRequirements}
                  onChange={(e) => this.handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} className={classes.textAreaControl}>
                <FontAwesomeIcon icon={faComment} className={classes.textAreaIcon}/>
                <TextareaAutosize
                  className={classes.textAreaField}
                  id="additionalInfo"
                  name="additionalInfo"
                  rowsMin={1}
                  placeholder="Anything else we need to know?"
                  value={formSelections.additionalInfo}
                  onChange={(e) => this.handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} className={classes.btnControl}>
                <Button className={classes.formBtn} onClick={this.submitForm}>
                  Submit
                  <FontAwesomeIcon className={classes.faIcon} icon={faCheckCircle}/>
                </Button>
                <Button className={classes.formBtn} onClick={this.resetForm}>
                  Reset
                  <FontAwesomeIcon className={classes.faIcon} icon={faTimesCircle}/>
                </Button>
              </Grid>
            </Fragment>
          }
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Form);
