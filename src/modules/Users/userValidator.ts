import { TableType } from './../tables/ITableData';
import { ValidatorError } from './../tables/ITableConfiguration';

const userValidator: (result: Record<string, TableType>) => ValidatorError = (result) => {
    const errors: ValidatorError = []

    // Password validation
    if((result.password as string).length < 8)
        errors.push({
            belongsTo: 'password',
            message: 'Password must contain at least 8 symbols!'
        })
    else if(result.password !== result.confirm_password)
        errors.push({
            belongsTo: 'password',
            message: 'Passwords must match!'
        })
    
    return errors.length ? errors : null
}

export default userValidator