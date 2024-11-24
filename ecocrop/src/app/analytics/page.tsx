"use client"
import { Box, useMediaQuery} from "@mui/material"
import DashboardBox from "../(components)/DashboardBox"
import Header from "../(components)/Header"
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';


type Props = {}

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const gridTemplateLargeScreen = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`

const gridTemplateSmallScreen = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"

`

const Analytics = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <>
    <div className="flex justify-between items-center mb-6 pt-3">
          <Header name="Analytics"/>
        </div>
    <Box width="100%" height="100%" display="grid" gap="1.5rem" sx={isAboveMediumScreens ? {
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplateLargeScreen
    } : {
        gridAutoColumns: "1fr",
        gridAutoRows: "80px",
        gridTemplateAreas: gridTemplateSmallScreen 
    }}>
        <DashboardBox gridArea="a" >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox gridArea="b" ></DashboardBox>
        <DashboardBox gridArea="c" ></DashboardBox>
        <DashboardBox gridArea="d" ></DashboardBox>
        <DashboardBox gridArea="e" ></DashboardBox>
        <DashboardBox gridArea="f" ></DashboardBox>
        <DashboardBox gridArea="g" ></DashboardBox>
        <DashboardBox gridArea="h" ></DashboardBox>
        <DashboardBox gridArea="i" ></DashboardBox>
        <DashboardBox gridArea="j" ></DashboardBox>
    </Box>
    </>
  )
}

export default Analytics