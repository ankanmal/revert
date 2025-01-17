import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function EnvironmentSelector({ environmentProp, setEnvironmentProp, environmentList }) {
    const handleChange = (event: SelectChangeEvent) => {
        setEnvironmentProp(event.target.value);
    };
    return (
        <FormControl sx={{ m: 1, minWidth: 120, background: '#e4e7eb', borderRadius: 2, marginLeft: 3 }} size="small">
            <Select
                labelId="environment-selector"
                id="environment-selector"
                value={environmentProp}
                label="environment"
                defaultValue={environmentProp}
                onChange={handleChange}
                SelectDisplayProps={{
                    style: {
                        color: '#343232',
                    },
                }}
                sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '.MuiSvgIcon-root ': {
                        fill: '#343232 !important',
                    },
                }}
                className="capitalize"
            >
                {environmentList?.map((e) => (
                    <MenuItem
                        value={e.env}
                        className="capitalize"
                        sx={{
                            '&&.Mui-selected': {
                                backgroundColor: '#626060',
                            },
                            '&.Mui-selected:hover': {
                                backgroundColor: '#747272',
                            },
                        }}
                    >
                        {e.env}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
