import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Box, Container, TextField, Typography } from "@mui/material";
import { StyledTooltip } from "../components/styles/Tooltip/Tooltip.styled";
import { StyledHomeIcon } from "../components/styles/Icons/Icons.styled";
import { Key } from "@mui/icons-material";
import { StyledHeader } from "../components/styles/Header.styled";
import { StyledButton } from "../components/styles/Button/Button.styled";
import { DatePicker, TimePicker, DateRangePicker } from "@mui/lab";

const priorities = [
  {
    value: "low",
    label: "low",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "hight",
    label: "hight",
  },
];

export default function AddActivity() {
  const [priority, setPriority] = useState("medium");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  // const [selectedDateInterval, setSelectedDateInterval] = React.useState([
  //   null,
  //   null,
  // ]);

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  // const navigate = useNavigate();

  // const goToHomePageHandler = () => {
  //   navigate("/");
  // };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Add Activity
        </Typography>
      </Box>
      <Box component="form">
        <TextField
          id="title"
          label="Enter Activity"
          type="text"
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
        />
        <TextField
          id="standard-textarea"
          label="Enter Note"
          placeholder="Enter Note"
          multiline
          fullWidth
          variant="outlined"
          sx={{ mb: 3 }}
        />
        <TextField
          id="priority"
          select
          fullWidth
          label="Set priority"
          value={priority}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          sx={{ mb: 3 }}
        >
          {priorities.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <DatePicker
          label="Select Date"
          renderInput={(params) => (
            <TextField fullWidth sx={{ mb: 3 }} {...params} />
          )}
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
        />
        <TimePicker
          label="Select Time"
          renderInput={(params) => <TextField fullWidth {...params} />}
          value={selectedTime}
          onChange={(newValue) => {
            setSelectedTime(newValue);
          }}
        />
        {/* <DateRangePicker
          startText="from"
          endTExt="to"
          value={selectedDateInterval}
          onChange={(newValue) => {
            setSelectedDateInterval(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <div>
              <TextField {...startProps} />
              <Box sm={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </div>
          )}
        ></DateRangePicker> */}
        <StyledButton
          type="submit"
          fullWidth
          // disabled={loading}
          sx={{ mt: 3, mb: 2 }}
        >
          Add
        </StyledButton>
      </Box>
    </Container>
  );
}
