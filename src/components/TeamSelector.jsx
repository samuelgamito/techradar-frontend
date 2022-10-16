import { useState } from "react";

import { Select, MenuItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Group as GroupIcon } from "@mui/icons-material";

const SelectTeam = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  right: "2em",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const GroupIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "3em",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledSelectBase = styled(Select)(({ theme }) => ({
  color: "inherit",
  border: "none",
  height: "3em",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "12ch",
    border: "none",
  },
  "& fieldset": {
    border: "none",
  },
}));

export default function TeamSelector() {
  const [teamId, setTeamId] = useState("all");

  const handleChange = (event) => {
    setTeamId(event.target.value);
  };

  return (
    <SelectTeam>
      <GroupIconWrapper>
        <GroupIcon />
      </GroupIconWrapper>
      <StyledSelectBase
        labelId="team-selector-label"
        id="team-selector"
        onChange={handleChange}
        value={teamId}
      >
        <MenuItem value="all">
          <em>All Teams</em>
        </MenuItem>
        <MenuItem value="team-1">Team 1</MenuItem>
        <MenuItem value="team-2">Team 2</MenuItem>
        <MenuItem value="team-3">Team 3</MenuItem>
      </StyledSelectBase>
    </SelectTeam>
  );
}
