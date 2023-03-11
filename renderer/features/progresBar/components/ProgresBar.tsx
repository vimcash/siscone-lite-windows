import { Box, Typography, Stack } from "@mui/material";
import { ProgressBarProps } from '../../../interfaces/preogres.bar'

export const ProgressBar = ({title, percentage, color}: ProgressBarProps) => (
    <Box width="100%">
    <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
    >
        <Typography fontSize={16} fontWeight={500} color="#11142d">
            {title}
        </Typography>
        <Typography fontSize={16} fontWeight={500} color="#11142d">
            {percentage}%
        </Typography>
    </Stack>
    <Box
        mt={2}
        position="relative"
        width="100%"
        height="8px"
        borderRadius={1}
        bgcolor="#e4e8ef"
    >
        <Box
            width={`${percentage}%`}
            bgcolor={color}
            position="absolute"
            height="100%"
            borderRadius={1}
        />
    </Box>
  </Box>
  );

export default ProgressBar