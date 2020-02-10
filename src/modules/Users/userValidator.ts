import { TableType } from './../tables/ITableData';
import { ValidatorError } from './../tables/ITableConfiguration';

const userValidator: (result: Record<string, TableType>) => ValidatorError = (result) => {
    const errors: ValidatorError = []

    // Password validation
    if((result.password as string).length < 8)
        errors.push({
            belongsTo: 'password',
            message: 'At least 8 symbols!'
        })
    if((result.password as string).search(/[0-9]/) === -1) 
        errors.push({
            belongsTo: 'password',
            message: 'At least one digit!'
        })
    if((result.password as string).search(/[A-Z]/) === -1) 
        errors.push({
            belongsTo: 'password',
            message: 'At least one capital letter!'
        })
    if((result.password as string).search(/[a-z]/) === -1) 
        errors.push({
            belongsTo: 'password',
            message: 'At least one lowercase letter!'
        })
    if(result.password !== result.confirm_password)
        errors.push({
            belongsTo: 'password',
            message: 'Passwords must match!'
        })
    
    return errors.length ? errors : null
}

export default userValidator