import React, {Component} from "react";
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
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl>
              <FontAwesomeIcon icon={faUsers}/>
              <InputLabel id="guest-group">Guest / Group</InputLabel>
              <Select
                labelId="guest-group"
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl>
              <FontAwesomeIcon icon={faCheckCircle}/>
              <InputLabel id="attending">Can you make it??</InputLabel>
              <Select
                labelId="attending"
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={'Yes'}>Yes</MenuItem>
                <MenuItem value={'No'}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl>
              <FontAwesomeIcon icon={faTimesCircle}/>
              <TextField id="not-attending" label="Anyone in your group can't make it?"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl>
              <FontAwesomeIcon icon={faMusic}/>
              <TextField id="song" label="Pick a song for our playlist"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl>
              <FontAwesomeIcon icon={faGlassMartiniAlt}/>
              <TextField id="drink" label="What's your drink?"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl>
              <FontAwesomeIcon icon={faCheese}/>
              <TextField id="dietary-requirements" label="Any dietary requirements"/>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FontAwesomeIcon icon={faComment}/>
              <TextareaAutosize id="additional-info" rowsMin={1} placeholder="Anything else we need to know?"/>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Form;
