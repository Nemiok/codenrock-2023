import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Box from '@mui/material/Box'
import React from 'react';
import Header from '../../components/header/header';

function LayoutPage() {
  return (
    <Box>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  )
}

export default React.memo(LayoutPage)
