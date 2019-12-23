import React, { Component } from 'react'
import { Theme, withStyles } from '@material-ui/core'
import { IColumnConfiguration } from './ITableConfiguration'
import { IColumnProps } from './ITableData'

interface TableCellProps {
    configuration?: IColumnConfiguration
    data: IColumnProps
    classes: any
}

class TableCell extends Component<TableCellProps> {
    render() {
        const { configuration, data, classes } = this.props
        switch(configuration && configuration.type) {
            case 'text':
            case 'number':
                return (<td>{data.value}</td>)
            default:
                return (null)
        }
    }
}

export default withStyles(({ palette, typography }: Theme) => ({

}))(TableCell)