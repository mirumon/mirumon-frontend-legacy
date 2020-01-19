import React, { Component } from 'react'
import { ITableConfiguration } from './ITableConfiguration'
import { IColumnProps } from './ITableData'
import TableCell from './TableCell'
import TableRowActions from './TableRowActions'
import { EditContainer } from 'utils/EditContainer';

interface CreatingRowProps {
    configuration: ITableConfiguration
    onApply?(value: Record<string, IColumnProps>): any
    onClose?(): any
}

interface CreatingRowState {
    data: Record<string, IColumnProps>
}

class CreatingRow extends Component<CreatingRowProps, CreatingRowState> {

    constructor(props: CreatingRowProps){
        super(props)
        this.state = {
            data: {},
        }
    }

    onCancelHandler = () => {
    }

    onApplyHandler = (data: Record<string, IColumnProps>) => {
    }

    render() {
        const { configuration } = this.props
        return (
            <tr>
                <EditContainer<Record<string, IColumnProps>>
                    value={this.state.data}
                    >
                    {
                        (value, setValue, reset) => {
                            console.log(value)
                            return (
                            <>
                                {
                                    configuration.columns.map(columnConfiguration => (
                                        <TableCell
                                            key={`Row:${columnConfiguration.key}`}
                                            configuration={columnConfiguration}
                                            data={value[columnConfiguration.key]}
                                            isEditing
                                            onChange={(newValue) => setValue({
                                                ...value,
                                                [columnConfiguration.key]: {
                                                    value: newValue,
                                                }
                                            })}
                                        />
                                    ))
                                }
                                {
                                    configuration.rows && configuration.rows.actions && (
                                        <TableRowActions
                                            actions={configuration.rows.actions}
                                            isEditing={true}
                                            onApply={() => this.onApplyHandler(value)}
                                            onCancel={() => {reset(); this.onCancelHandler()}}
                                        />
                                    )
                                }
                            </>
                        )}
                    }
                </EditContainer>
            </tr>
        )
    }
}

export default CreatingRow