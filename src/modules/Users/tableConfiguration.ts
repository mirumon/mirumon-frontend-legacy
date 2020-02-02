import { ITableConfiguration } from 'modules/tables/ITableConfiguration'
import UserTableRow from './UserTableRow'

const tableConfiguration:ITableConfiguration = {
    rows: {
        actions: ['create', 'update', 'delete'],
        component: UserTableRow
    },
    columns: [
        {
            key: 'name',
            label: 'Name',
            type: 'text',
            editable: true,
        },
        {
            key: 'right',
            label: 'Right',
            type: 'select',
            editable: true,
            options: {
                default: 'one',
                variants: [
                    {
                        id: 'one',
                        label: 'One'
                    },
                    {
                        id: 'two',
                        label: 'Two'
                    },
                ]
            }
        },
        {
            key: 'groups',
            label: 'Groups',
            type: 'check-list',
            editable: true,
            options: {
                variants: [
                    {
                        id: 'one',
                        label: 'One-group'
                    },
                    {
                        id: 'two',
                        label: 'Two-group'
                    },
                ]
            }
        }
    ]
}

export default tableConfiguration