import { Box, Divider, Typography } from "@mui/material";
import { TestCase } from "./TestCase";

import { calculateSum } from "../services/utility";

interface SummaryTableSeriesProps {
  testCases: TestCase[];
}

function SummaryTableSeries({ testCases }: SummaryTableSeriesProps) {
  const increased = testCases.filter((x) => x.score > x.baseScore).length;
  const noChange = testCases.filter((x) => x.score === x.baseScore).length;
  const decreased = testCases.filter((x) => x.score < x.baseScore).length;
  const score = calculateSum(testCases.map((x) => x.score));
  const baseScore = calculateSum(testCases.map((x) => x.baseScore));

  return (
    <Box>
      <Typography>{testCases.length}</Typography>
      <Divider />
      <Typography>
        <b>{increased}</b>
      </Typography>
      <Typography>
        <b>{noChange}</b>
      </Typography>
      <Typography>
        <b>{decreased}</b>
      </Typography>
      <Divider />
      <Typography>
        <b>{score.toLocaleString()}</b>
      </Typography>
      <Typography>
        <b>{baseScore.toLocaleString()}</b>
      </Typography>
      <Typography>
        <b>{(score - baseScore).toLocaleString()}</b>
      </Typography>
    </Box>
  );
}

export default SummaryTableSeries;
