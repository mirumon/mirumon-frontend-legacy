import { Theme, withStyles, Tooltip } from '@material-ui/core'

const WarningTooltip = withStyles((theme: Theme) => ({
    tooltip: {
      backgroundColor: theme.palette.warning.dark,
      color: theme.palette.text.primary,
      opacity: .7,
      maxWidth: 220,
    }
  }))(Tooltip);

  export default WarningTooltip