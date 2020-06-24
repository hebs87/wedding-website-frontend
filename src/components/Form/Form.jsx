import {styles} from './Form.styles';
import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
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
      }
    };
  }

  handleChange = event => {
    let formSelections = this.state.formSelections;
    formSelections[event.target.name] = event.target.value
    this.setState({formSelections}, () => console.log(this.state.formSelections));
  };

  render() {
    // Destructure props and state
    const {classes} = this.props;
    const {guests, attendingChoices, formSelections} = this.state;

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faUsers} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="guestGroup"
              name="guestGroup"
              select
              label="Guest/Group"
              value={formSelections.guestGroup}
              onChange={(e) => this.handleChange(e)}
            >
              {guests.map(guest => (
                <MenuItem key={guest.value} value={guest.value}>
                  {guest.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faCheckCircle} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="attending"
              name="attending"
              select
              label="Can you make it?"
              value={formSelections.attending}
              onChange={(e) => this.handleChange(e)}
            >
              {attendingChoices.map(choice => (
                <MenuItem key={choice.value} value={choice.value}>
                  {choice.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faTimesCircle} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="notAttending"
              name="notAttending"
              label="Anyone in your group can't make it?"
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
              value={formSelections.song}
              onChange={(e) => this.handleChange(e)}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faGlassMartiniAlt} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="drink"
              name="drink"
              label="What's your drink?"
              value={formSelections.drink}
              onChange={(e) => this.handleChange(e)}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faCheese} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="dietaryRequirements"
              name="dietaryRequirements"
              label="Any dietary requirements"
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
              rowsMin={3}
              placeholder="Anything else we need to know?"
              value={formSelections.additionalInfo}
              onChange={(e) => this.handleChange(e)}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Form);
