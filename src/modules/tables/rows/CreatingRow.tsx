import React, { Component } from 'react'
import { ITableConfiguration } from '../ITableConfiguration'
import TableCell from '../TableCell'
import TableRowActions from './TableRowActions'
import { EditContainer } from 'utils/EditContainer';
import { ITableRecord } from '../ITableData';

interface CreatingRowProps {
    configuration: ITableConfiguration
    onApply?(value: Partial<ITableRecord>): any
    onClose?(): any
}

interface CreatingRowState {
    data: Partial<ITableRecord>
}

class CreatingRow extends Component<CreatingRowProps, CreatingRowState> {

    constructor(props: CreatingRowProps){
        super(props)
        this.state = {
            data: {},
        }
    }

    render() {
        const { onApply, onClose, configuration } = this.props
        return (
            <tr>
                <EditContainer<Partial<ITableRecord>>
                    value={this.state.data}
                    >
                    {
                        (value, setValue, reset) => (
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
                                                [columnConfiguration.key]: newValue
                                            })}
                                        />
                                    ))
                                }
                                {
                                    configuration.rows && configuration.rows.actions && (
                                        <TableRowActions
                                            actions={configuration.rows.actions}
                                            isEditing={true}
                                            onApply={() => onApply && onApply(value)}
                                            onCancel={() => {reset(); onClose && onClose()}}
                                        />
                                    )
                                }
                            </>
                        )
                    }
                </EditContainer>
            </tr>
        )
    }
}

export default CreatingRow