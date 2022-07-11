import { Box, Button, Grid, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LogoMagister } from '../components/Welcome/LogoMagister';

export const steps = [
    {
        label: '¿En qué te quieres especializar?',
    },
    {
        label: 'Horario y Modalidad',
    },
    {
        label: 'Tarifa',
    },
    {
        label: 'Datos Personales',
    },
    {
        label: 'Dirección',
    },
    {
        label: 'Forma de Pago',
    },
];

export const StepsPage = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (

        <Grid container style={{ marginTop: '4em' }}>
            <Grid item xs={3}>

                <LogoMagister config={{ width: 350 }} />

                <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel>
                                    {step.label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>

                <Box
                    component='img'
                    sx={{width: 280}}
                    src={'../../../../assets/matricula_IMG/speciality.png'}
                    alt='logoMagister'
                />

            </Grid>
            <Grid item xs={9} style={{ backgroundColor: '#fff' }}>
                <span >
                    gds
                </span>
            </Grid>
        </Grid>



    )
}
