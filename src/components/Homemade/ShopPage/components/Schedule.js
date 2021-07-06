import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import "./Schedule.css"

function indexToDayConverter(index) {
  switch (index) {
    case 0:
      return "Sun"

    case 1:
      return "Mon"

    case 2:
      return "Tue"

    case 3:
      return "Wed"

    case 4:
      return "Thu"

    case 5:
      return "Fri"

    case 6:
      return "Sat"

    default:
      return "???"
  }
}

const Schedule = ({ schedules }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>DAY</TableCell>
            <TableCell>START TIME</TableCell>
            <TableCell>END TIME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules.map((schedule, index) => (
            <TableRow>
              <TableCell>{indexToDayConverter(index)}</TableCell>
              <TableCell>{schedule.open}</TableCell>
              <TableCell>{schedule.closed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Schedule
