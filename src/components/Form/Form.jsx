import {styles} from './Form.styles';
import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
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

class Form extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faUsers} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="guest-group"
              select
              label="Guest/Group"
              // value={currency}
              // onChange={handleChange}
            >
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faCheckCircle} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="attending"
              select
              label="Can you make it?"
              // value={currency}
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faTimesCircle} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="not-attending"
              label="Anyone in your group can't make it?"
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faMusic} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="song"
              label="Pick a song for our playlist"
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faGlassMartiniAlt} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="drink"
              label="What's your drink?"
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.formControl}>
            <FontAwesomeIcon icon={faCheese} className={classes.formIcon}/>
            <TextField
              className={classes.formField}
              id="dietary-requirements"
              label="Any dietary requirements"
            />
          </Grid>
          <Grid item xs={12} className={classes.textAreaControl}>
            <FontAwesomeIcon icon={faComment} className={classes.textAreaIcon}/>
            <TextareaAutosize
              className={classes.textAreaField}
              id="additional-info"
              rowsMin={3}
              placeholder="Anything else we need to know?"
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Form);
