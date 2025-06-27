import React, { PropsWithChildren } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../common/Card'

interface FormWrapperProps {
    heading: string
}

const FormWrapper = ({ children, heading }: PropsWithChildren<FormWrapperProps>) => {
    return (
        <Card>
            <CardHeader className='p-4'>
                <CardTitle className='text-lg'>{heading}</CardTitle>
            </CardHeader>
            <CardContent className='p-0'>{children}</CardContent>
        </Card>
    )
}

export default FormWrapper